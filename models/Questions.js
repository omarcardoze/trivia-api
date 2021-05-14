const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const QuestionsSchema = new Schema({
    prompt: String,
    optionA: String,
    optionB: String,
    optionC: String,
    optionD: String,
    asnwer: String
});

const Questions = model('Questions', QuestionsSchema)

module.exports = Questions