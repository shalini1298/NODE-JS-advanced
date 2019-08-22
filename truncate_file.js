
 const fs=require('fs');
 const path = require('path');
 const dirname=path.join(__dirname,'files');
 const files =fs.readdirSync(dirname);
    files.forEach (file  => {     
      const filePath=path.join(dirname,file);
      fs.stat(filePath,(err,stats) => {     //stat to read only meta info
      if(err)  throw err;


    fs.truncate(filePath,stats.size/2,(err) => {  //truncate the size
   if(err) throw err;
    });

   });
});