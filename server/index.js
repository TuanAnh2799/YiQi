import express  from "express";
import http from 'http';
import { Server } from "socket.io";
import mongoo from 'mongoose';
import cors from 'cors';
import bodyParser from "body-parser";
import user from './routes/user.js';


const PORT = 5000;

const app = express();

const URI ='mongodb+srv://TA:khongcomatkhau@cluster0.pdawe.mongodb.net/?retryWrites=true&w=majority';

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(cors());

app.use('/api', user);

const server = http.createServer(app);
const io = new Server(server);


io.on("connection", (socket) => {
    console.log('Have user connected:', socket.id);
    socket.on("send-data", (value) => {
        console.log('server get data: ',value);
        io.emit("server-send-data", value);
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
})


mongoo.connect(URI, { 
    useNewUrlParser: true, useUnifiedTopology: true, 
}).then(()=> {
    app.listen(PORT,()=>{
        console.log('Connect to DB'); //kết nối thành công thì chạy server
        console.log(`Server mongo is running on port ${PORT}`)
    });

}).catch((err) => {
    console.log('err:', err);
});


const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server running on port ${port}`));