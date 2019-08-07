const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000
const cors = require('cors')
const userRouter = require('./router/userRouter')
const shoppingRouter = require('./router/shoppingRouter')

app.use(bodyParser.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/shopping', shoppingRouter)

app.get('/', (req, res) => {
    res.send('<h1>Tes Koneksi</h1>')
})

app.listen(port, () => console.log('Berjalan di port ' + port))