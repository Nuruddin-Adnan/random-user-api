const express = require('express')
const fs = require('fs');
const cors = require('cors');
const app = express()

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;

const userRouter = require('./routes/users.route');


app.use('/user', userRouter);

app.get('/', async (req, res) => {
    res.send('Random user server is running')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})