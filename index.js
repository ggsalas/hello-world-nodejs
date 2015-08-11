var express = require('express'),
    app = express();

app.get('/', function(req, resp){
  resp.send('Hola mundo');
})

app.get('/pepe', function(req, resp){
  resp.send('Hola pepe');
})

app.listen(8080, function(){
  console.log('A la escucha en el puerto 8080');
});
