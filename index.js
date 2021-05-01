
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3333;
let contador = 0;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    contador++;
    console.log(contador);
    console.log(`A mensagem ${msg} foi recebida com sucesso!!!!`);
    io.emit('chat message', msg);
  });
});

http.listen(port, () => {
  console.log(`Servidor rodando no ip e porta >>> http://localhost:${port}/`);
});