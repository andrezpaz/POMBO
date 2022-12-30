module.exports = app => {
    const jwt = require('jsonwebtoken');
    app.post('/api/v1/login', (req, res, next) => {
        // check in database
        if (req.body.user === process.env.USER_AUTH_LOGIN_API && req.body.password === process.env.PASS_AUTH_LOGIN_API) {
            const id = 991778889; // id que vem do banco 
            const token = jwt.sign( { id}, process.env.SECRET, {
                expiresIn: 300 // expires in 5min
            });
            return res.json( { auth:true, token:token});
        }
        res.status(500).json({message: 'invalid login'});
    }
)}