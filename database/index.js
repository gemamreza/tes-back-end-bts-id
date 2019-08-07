const mysql = require('mysql')

const db = mysql.createConnection({
    host : "3.0.56.213",
    port: "3306",
    user : "fortest",
    password : "pa55word",
    database: "shoppingdb",
    localAddress : "13.229.85.192"
})

module.exports = db