import { PrismaClient } from "@prisma/client";
import { Response, Request } from 'express'
const prisma = new PrismaClient()

export const GETStudents = async (request: Request, response: Response) => {
    const students = await prisma.student.findMany()
    response.status(200).json(students)
}

export const GETStudent = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id)

    const student = await prisma.student.findUnique({
        where: { id: id }
    })

    if (student) {
        response.status(200).json(student)
    } else {
        response.status(404).json({
            error: 'User not found'
        })
    }
}

export const PATCHStudent = async (request: Request, response: Response) => {
    try {
        const id = parseInt(request.params.id)
        const { name, email } = request.body

        const student = await prisma.student.update({
            where: { id },
            data: { name, email }
        })

        if (student) {
            response.status(201).json({ name })
        } else {
            response.status(400).json({
                error: 'Problem with error'
            })
        }
    } catch (error) {
        console.error('Error in service: ', error)
        response.status(400).json({
            error: 'Problem in service'
        })
    }
}

export const POSTStudent = async (request: Request, response: Response) => {
    try {
        const { body } = request

        const student = await prisma.student.create({ data: body })

        if (student) {
            response.status(201).json(student)
        } else {
            response.status(400).json({
                error: 'Problem with error'
            })
        }
    } catch (error) {
        console.error('Error in service: ', error)
        response.status(400).json({
            error: 'Problem in service'
        })
    }
}