/**
 * Created by Hatake on 6/30/2017.
 */
const fs = require('fs');
const url = require('url');
const {fork} = require('child_process');

require('http').createServer((request, response) => {
    const fileURL = url.parse(request.url, true);
    console.log(fileURL);
    const filePath = fileURL.query.url;
    console.log(filePath);

    const childProcess = fork('PrblmChildProcess.js');
    childProcess.send(filePath);
    childProcess.on('message', result => response.end(result));

}).listen(3000, '127.0.0.1');
