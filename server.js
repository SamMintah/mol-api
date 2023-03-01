const express = require("express");
const { dbConnect } = require("./config/dbConnect")


const app = express();
const PORT = 5000;









// starting Database
async function start(){
    await dbConnect();
    
    app.listen(PORT, (err) => {
        console.log(`Server listening on ${PORT}`);
    });
    
}
start();



