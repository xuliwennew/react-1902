


const path = require("path")
const express = require("express")

const app = express()
const router = express.Router()


router.get("/user",(req,res)=>{
    res.json({
        code:200
    })
})


app.use("/api",router)

app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})
