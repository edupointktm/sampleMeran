// const express = require(express)
// const app = express()
// app.get("/", (req, res)=>{
//     res.send("app is working ....")
// })

// app.listen(5000)


const express = require('express')
const app = express()
app.get('/', (req,res)=>{
    res.send("hi i am working ...")
})
app.listen(5000)