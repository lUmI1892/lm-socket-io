

class Sockets {

    constructor(io){
        this.io = io;
        this.SocketEvent();
    }

    SocketEvent(){

        //On connection
        this.io.on('connection', ( socket )=>{

            //Escuchar el evento
            socket.on('mensaje-to-server',(data)=>{
                console.log(data);
                this.io.emit('mensaje-from-server',data)
            })

        });
    }
}

module.exports = Sockets;