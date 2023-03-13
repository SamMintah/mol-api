const mongoose = require("mongoose")
require('dotenv').config();

mongoose.set('strictQuery', true);

 async function dbConnect(){
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            dbName:"mol",

        })
        console.log("database connected successfully")
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = { dbConnect}
