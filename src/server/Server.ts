import * as express from 'express'
import * as path from 'path'

class Server {
    public express

    constructor () {
        this.express = express()
        this.mountRoutes()
    }
    
    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../../index.html'));
        })
        this.express.use(express.static(__dirname + '../../../dist'))          
        this.express.use('/assets',express.static(__dirname + '../../assets'))          
        this.express.use('/', router)
        
    }
}

export default new Server().express
