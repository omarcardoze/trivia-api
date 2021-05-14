const mongoose = require('mongoose')
require('dotenv').config()

const urlDB = process.env.MONGODB_URL

mongoose.connect(urlDB, 
    {   useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
        .then(console.log('Database connect!'))
        .catch(error => handleError(error));

