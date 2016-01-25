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

var data = fs.readFile('public/messages.html', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

function handleRequest(request, response){
    response.end(data);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
