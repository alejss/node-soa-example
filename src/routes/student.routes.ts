import { Router } from "express";
import { GETStudents, GETStudent, PATCHStudent, POSTStudent } from "../controller/student.controller";

const studentRouter = Router()

export const studentPath = '/students'

studentRouter.get('/', GETStudents)
studentRouter.get('/:id', GETStudent)
studentRouter.patch('/:id', PATCHStudent)
studentRouter.post('/', POSTStudent)

export default studentRouter
