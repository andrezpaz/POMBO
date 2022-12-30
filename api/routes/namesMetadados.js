module.exports = app => {
    const verifyJWT = require('../controllers/verifyJWT');
    const controller = app.controllers.metadadosGet;
    
    app.route('/api/v1/names-metadados')
    .get(verifyJWT.checkToken,(controller.listNamesMetadados));
}