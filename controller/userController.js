const db = require('../database/index')
const Crypto = require('crypto')

module.exports = {
    signUp : (req, res) => {
        var newData = {
            username : req.body.username,
            password : req.body.password,
            email : req.body.email,
            phone : req.body.phone,
            country : req.body.country,
            city : req.body.city,
            postcode : req.body.postcode,
            name : req.body.name,
            address : req.body.address
        }
        //check availability for username
        var sql = `select username from user where username = ${newData.username}`;
        db.query(sql, (err, result) => {
            try{
                if(err) throw {error: true, msg: "Error in Database"}
                if(result.length > 0) throw {error: true, msg: "Username has been taken"}
                var hashPassword = Crypto.createHmac('sha256', 'secretkey').update(newData.password).digest('hex')

                newData = {...newData, password : hashPassword}
                // insert new user
                var sql1 = `insert into user set ?`;
                db.query(sql1, newData, (err, result) => {
                    if(err) throw err
                    // res.redirect('/user/userdata/:id')
                    res.send(result)
                })
            } catch(err){
                res.send(err)
            }
        })
    },
    getUser : (req, res) => {
        var sql = `select email, token, username from user where username=${req.params.id}`;
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    signIn : (req, res) => {
        var email = req.query.email
        var password = req.query.password
        var hashPassword = Crypto.createHmac('sha256','secretkey').update(password).digest('hex')
        var sql = `select email, token, username from user where email='${email}' and password='${hashPassword}';`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    allUser : (req, res) => {
        var sql = `select * from user`;
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    }
}