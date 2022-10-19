const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require('./routes');
const { logErrors, errorHandlre, boomErrorHandler, ormErrorHandler } = require('./middlewares/error-handler');

app.use(express.json());

app.get('/',(req, res)=>{
  res.sendFile(__dirname+'/public/index.html');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandlre);

app.listen(port,()=>console.log('http://localhost:'+port));
