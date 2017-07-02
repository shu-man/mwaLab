/**
 * Created by Hatake on 6/30/2017.
 */
const {promisify}=require('util');
const fs=require('fs');


process.on('message',path=>{
    const Fileasync=promisify(fs.readFile);
    console.log("path is"+ path);
    Fileasync(path).
        then(data=>process.send(data.toString()))
        .catch(err=>console.log(err));

});