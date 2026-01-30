const app=require("./app");
require("dotenv").config()
const connectDB = require("./src/config/db");
const PORT=process.env.PORT||4000;


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
})