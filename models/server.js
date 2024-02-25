const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.connectarDB();
        this.middlewares();
        this.routes();
    }

    async connectarDB() {
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running and listening');
        })
    }
}

module.exports = Server;