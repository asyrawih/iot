var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(express.json());
app.use(express.static('public'))
app.ws('/', function(ws, req) {
  ws.on('message',function(msg) {
      // let dataJson = await JSON.parse(msg);
      console.log(msg); 
    //   console.log(dataJson);
      // ws.send(msg);
    // ws.send(msg);
  });
});

app.listen(3000);