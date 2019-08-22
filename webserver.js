process.stdout.write('\u001B[2J\u001B[0;0f');
const server=require('net').createServer();  //using netmodule and creating server

server.on('connection',socket => {
   console.log('Client Connected');  //when on connection notifies 
   socket.write('Welcome new client!\n');
 

   socket.on('data',data => {
       console.log('data is:', data); //console logs data entered by user
       socket.write('data is: ');  //allows the client to write data
       socket.write(data);
  });

socket.on('end', () =>{
    console.log('Client disconnected');  //notifies when disconnected
 });
});
    
   server.listen(8000, () => console.log('Server bound'));   //listens to the specified port
