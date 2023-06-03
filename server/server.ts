import express, { Application } from 'express'
import studentRouter, { studentPath } from '../src/routes/student.routes'

class Server {
    private application: Application
    private port: string

    constructor() {
        this.application = express()
        this.port = '8080'
        this.config()
        this.routes()
    }

    public start() {
        const showRun = () => console.log(`Sever run on port ${this.port}`)
        this.application.listen(this.port, showRun)
    }

    private routes() {
        this.application.use(studentPath, studentRouter)
    }

    private config() {
        this.application.use(express.json())
    }
}

export default Server