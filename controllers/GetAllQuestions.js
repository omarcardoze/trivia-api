const express = require('express')
const questionsRouter = express.Router()
const Questions = require('../models/Questions')

questionsRouter.get('/', async (req, res) => {
    
    const questionsList = await  Questions.aggregate([{$sample: {size: 5}}])

    res.json(questionsList)
})

questionsRouter.post('/', async (req, res) => {

    const { prompt, optionA, optionB, optionC, optionD, asnwer } = req.body

    const question = new Questions({
        prompt,
        optionA,
        optionB,
        optionC,
        optionD,
        asnwer
    })

    const saveQuestions = await question.save()

    res.json(saveQuestions)
})

module.exports = questionsRouter