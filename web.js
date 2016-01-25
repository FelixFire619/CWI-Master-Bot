//-------------------------\
//                         /
//  JavaScript Document    \
//  Author: Felix.Fire619  /
//  eMail: iam@felixfi.re  \
//                         /
//-------------------------\

var http = require('http');
var fs   = require('fs');

const PORT=8080;

function handleRequest(request, response){
    fs.readFile('public/messages.html', 'utf-8', (err, data) => {
  if (err) throw err;
  response.end(data);
});
};
    
var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});