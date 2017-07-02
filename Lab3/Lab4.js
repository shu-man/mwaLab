/**
 * Created by Hatake on 6/28/2017.
 */

const fs=require('fs');
const zlib=require('zlib');
const gzip=zlib.createGzip();

//Unzipping the file
const rezip=zlib.createGunzip();
const readable=fs.createReadStream(__dirname+'/Lab4.zip');
const decompressed=fs.createWriteStream(__dirname+'/Lab.txt');

readable.pipe(rezip).pipe(decompressed);

//First zip file
/*
const readable=fs.createReadStream(__dirname+'/Lab4.txt');
const decompressed=fs.createWriteStream(__dirname+'/Lab4.zip');

readable.pipe(gzip).pipe(decompressed);
*/
