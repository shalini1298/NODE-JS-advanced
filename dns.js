const dns=require('dns');
 dns.lookup('google.com',(err,address)=>{   //lookup a web address and print its ip address
   console.log(address);
});
   

 dns.resolve4('google.com', (err,address)=>{  //looksup array of ipv4 address
   console.log(address);
});
    
   dns.resolveMx('google.com',(err,address)=>{   //looksup mailexchange records for the specified hostname
     console.log(address);
});
  
     dns.reverse('35.161.75.227',(err,hostnames)=>{  //reverse an ip address into array of hostnames
console.log(hostnames);
});
  
  dns.resolveNs('google.com',(err,address)=>{   //looksup nameserver records for the specified hostnames
      console.log(address);
  });