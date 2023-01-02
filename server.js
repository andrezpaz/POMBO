const app = require('./config/express')();
const port = app.get('port');
const https = require('https');
const fs = require('fs')

const optionsHttps = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

/*app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
})*/

https.createServer(optionsHttps, app).listen(port)