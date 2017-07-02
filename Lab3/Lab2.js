/**
 * Created by Hatake on 6/28/2017.
 */

//using buffer
/*
 const  fs=require('fs');
 const server=require('http').createServer();

 server.on('request',(req,res)=>{
 fs.readFile('./414H.jpg',(err,data)=>{
 if(err)throw err;
 res.end(data);

 });
 });

 server.listen(8000);
 */

//Using Stream

require('http').createServer(function (req, res) {
    fs.createReadStream("./414H.jpg").pipe(res);
}).listen(8000);
