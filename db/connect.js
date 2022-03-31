const mongoose = require("mongoose");


const connectDB = (url) => {
    mongoose.connect(url,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        }
    ).then(() => {
        console.log("Connect to DB successfully!");
    }).catch(err => console.log("can not connect toDB"));
}

module.exports = connectDB;