'use strict'

const app = require('./app')
const port = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, 'assets')))
app.listen(port, () => console.log(`server is running on port:${port}`))