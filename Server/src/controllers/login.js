const emaPass = require('../utils/users');

function logins(req,res) {

    const {email,password} = req.query;

    let users = emaPass.find((user) => user.email === email && user.password=== password)

    users ? res.status(200).json({access:true}) : res.status(404).json({access:false})
}

module.exports={logins}