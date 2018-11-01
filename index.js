const express = require('express')
const port = process.env.PORT || 4000

const app = express()

app.get('/', (req, res) => {
    res.send('hi... this is cool!')
})

app.listen(port, () => console.log('app is running...'))