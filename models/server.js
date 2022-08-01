// Servidor de Express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        /* this.port = 8080; */

        //Http server
        this.server = http.createServer(this.app)

        //Configuraciones de Socket
        this.io = socketio(this.server, {/* configuraciones */});
    }

    middlewares(){
        this.app.use( express.static( path.resolve(__dirname, '../public' ) ))
    }

    configurarSokets(){
        new Sockets(this.io);
    }

    execute(){

        //Inicializar middlewares
        this.middlewares()

        //Inicializar Sockets
        this.configurarSokets();

        //Inicializar server
        this.server.listen(this.port,()=>{
            console.log('Server corriendo en el puerto',this.port);
        });
    }
}

module.exports = Server;