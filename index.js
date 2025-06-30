import express from 'express';
import dotenv from 'dotenv';
const app = express()

// const port = 5213

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/twitter', (req, res) => {
    res.send('rajesh');
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at node backend</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>We are at Youtube</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);

})