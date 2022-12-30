module.exports = app => {
    app.post('/api/v1/logout', (req, res, next) => {
        res.json( {auth:false, token:null});
    }
)}