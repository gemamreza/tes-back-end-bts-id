const db = require('../database/index')

module.exports = {
    createShopping : (req, res) => {
        var createdate = req.body.createdate
        var name =  req.body.name
        var sql = `insert into shopping (createdate,name) values ('${createdate}','${name}');`
        db.query(sql, {createdate, name} , (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    getAllShopping : (req, res) => {
        var sql = `select * from shopping`;
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    getShoppingByID : (req, res) => {
        var id = req.params.id
        var sql = `select * from shopping where id=${id}`;
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    updateShopping : (req, res) => {
        var createdate = req.body.createdate
        var name = req.body.name
        var id = req.params.id
        var sql = `update shopping set createdate = '${createdate}', name = '${name}' where id=${id}`;
        db.query(sql, {createdate, name}, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    deleteShopping : (req, res) => {
        var id = req.params.id
        var sql = `delete from shopping where id=${id}`;
        db.query(sql, (err, result) => {
            if(err) throw err
            req.send(result)
        })
    }
}