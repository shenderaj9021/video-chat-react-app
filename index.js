const app = require("express")()
const server = require("http").createServer(app);
const cors = require("cors");
const { Socket } = require("socket.io");


const io = require("socket.io")(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("server is runnig ");
});
server.listen(PORT,()=> console.log(`server listening on port ${PORT}`));

io.on('connection',(socket)=>{
    socket.emit('me',socket.id);
    socket.on('disconnect',()=>{
        socket.broadcast.emit("callended");
    })
    socket.on('calluse',({userTocall,signalData,from,name})=>{
        io.to(userTocall).emit("calluser",{signal:signalData,from,name})
    })
    socket.ong("answercall",(data)=>{
        io.to(data.io).emit("callaccepted",data.signal);
    })
})