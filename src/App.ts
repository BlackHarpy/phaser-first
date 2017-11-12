import * as express from 'express'
import * as path from 'path'

class App {
    public express

    constructor () {
        this.express = express()
        this.mountRoutes()
    }
    
    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../index.html'));
        })
        this.express.use('/', router)
    }
}

export default new App().express
