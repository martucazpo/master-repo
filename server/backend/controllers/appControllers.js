const User = require("../db/models").User


module.exports = {
    getAUser: (req, res)=>{
        let {_id} = req.body
        User.findById({_id}, (err, data)=>{
            if(err){
                console.log(err)
            } else {
                let { firstName, lastName, email, _id } = data
                res.json({firstName, lastName, email, _id})
            }
        })
    }
}