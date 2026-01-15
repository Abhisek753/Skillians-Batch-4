require("dotenv").config();
const app = require("./app");
const connectDB=require("./src/config/db")
PORT=process.env.PORT;
connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

