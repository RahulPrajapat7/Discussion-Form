const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()

const port = 5000

app.use(cors())

app.use(express.json())

app.use('/api', require('./routes/question'))


app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})