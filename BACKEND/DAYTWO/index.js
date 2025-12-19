const http=require("http");

// const server=http.createServer((req,res)=>{
// res.writeHead(201,{"content-type":"text/plain"})
//     res.end("Ok")
// })

const server=http.createServer((req,res)=>{
    if(req.url=="/" && req.method==="GET"){
        res.write(JSON.stringify({name:"Rakesh"}));
        res.end()
    }else if(req.url=="/about"){
        res.end("About Page")
    }else{
        res.end("Page Not Found")
    }
})

server.listen(3000,()=>{
    console.log("Server is running in 3000")
})