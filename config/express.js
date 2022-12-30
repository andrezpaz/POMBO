const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');
require('dotenv').config();

module.exports = () => {
    const app = express();

    //Variavies da aplicacao 
    app.set('port', process.env.PORT || config.get('server.port'))
    
    // Middlewares
    app.use(bodyParser.json());


    // Endpoints
    consign({cwd: 'api'})
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app);

    return app
}