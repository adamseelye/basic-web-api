const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

app.get('/', (req, res) => {
    res.json('Welcome to Web API')
})

app.get('/content', (req, res) =>{
    axios.get('<add URL here>')
        .then((response) => {
            const html = response.data
            console.log(html)
        })
})

app.listen(PORT, () => console.log('server running on PORT ${PORT}'))
