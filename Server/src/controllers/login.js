const emaPass = require('../utils/users');

function logins(req,res) {

    const {rtEmail,rtPassword} = req.query;

    let users = emaPass.find((user) => user.email === rtEmail && user.password=== rtPassword)

    users ? res.status(200).json({access:true}) : res.status(404).json({access:false})
}

module.exports=logins