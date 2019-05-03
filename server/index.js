const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

app.set('PORT', process.env.NODE_ENV || 3000)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

app.use('/api/times', require(path.join(__dirname, 'routes', 'times.routes')))
app.use((req, res) => res.status(404).json({ message: 'Resource Not Found' }))

app.listen(app.get('PORT'), () => {
  console.log(`Express server initialize on port ${app.get('PORT')}`)
})
