require("dotenv").config();
const app=require("./app")
const PORTVALUE=process.env.PORT;


app.listen(PORTVALUE,()=>{
    console.log(`Server started ${PORTVALUE}`)
})
