require('./mongodb')
require('dotenv').config()
const cors = require('cors')

const express = require('express')
const app = express()
const questionsRouter = require('./controllers/GetAllQuestions')

app.use(express.json())
app.use(cors())
app.use('/api/questions', questionsRouter)
app.set('PORT', process.env.PORT)

app.listen(app.get('PORT'), () => {
    console.log(`Server running on port ${app.get('PORT')}`)
})