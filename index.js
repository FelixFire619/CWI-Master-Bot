//-----------------------------------------------------------------------------\
//-----------------------------------------------------------------------------/
//-----------------------------------------------------------------------------\
//-- Author: Felix.Fire619 ----------------------------------------------------/
//-- eMail: iam@felixfi.re  ---------------------------------------------------\
//-- Taught and Assisted By ---------------------------------------------------/
//-- Freenode #CSS-Lance Handle -----------------------------------------------\
//-- Endercoder ---------------------------------------------------------------/
//-----------------------------------------------------------------------------\
//-----------------------------------------------------------------------------\
//-----------------------------------------------------------------------------/

var http = require('http');
var irc  = require('irc');
var fs   = require('fs');

var client = new irc.Client('irc.freenode.net', 'CWIBot', {
  autoConnect: false
});
client.connect(5, function(input) {
  consoleLog("Connected!");
  client.join('#CWI.Network', function(input) {
    consoleLog("Joined #CWI.Network");
  });
});

client.addListener('message', function (from, to, text) {
  consoleLog(from + ' => ' + to + ': ' + text);
  if(from !== 'CWIBot') {
    client.say('#CWI.Network', "Echo: "+text);
  }
});

function consoleLog(message) {
  fs.appendFile('./public/messages.html', '\n' + message + ' <br>', function (err) {
    console.log('could not append file ' + err);
  });
}

