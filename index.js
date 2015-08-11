var express = require('express'),
    app = express();

app.get('/', function(req, resp){
  resp.send('Hola mundo');
})

app.get('/manolo', function(req, resp){
  resp.send('Hola manolo');
})

app.listen(8080, function(){
  console.log('A la escucha en el puerto 8080');
});
