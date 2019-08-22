const fs=require('fs');     
const server=require('https')
  .createServer({
     key: fs.readFileSync('./key.pem'),    //read private key
     cert: fs.readFileSync('./cert.pem'),  //read certificate
});
  


  server.on('request',(req,res) => {  
     res.writeHead(200, { 'content-type' : 'text/plain' });
     res.end('Hello world\n');
  });
  

  server.listen(443); //default port for https communication


