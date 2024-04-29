const express = require('express') ;
const dns = require('dns') ;

const app = express() ;
app.use(express.json())

app.post('/ipv4',(req,res)=>{
    const website_domain = req.body.domain ;
    try{
        dns.resolve(website_domain,"A",(err,address)=>{
        res.send(address).status(200)
    })
    }catch(err){
         res.send("Error").status(400) ;
    }
}) ;

app.post('/ipv6',(req,res)=>{
    const website_domain = req.body.domain ;
    try {
        dns.resolve(website_domain,"AAAA",(err,address6)=>{
            res.send(address6).status(200) ;
        })
    } catch (error) {
        res.send("Error").status(400) ;
    }
})

app.listen(3002,()=>{
    console.log("Server is Running on 3002") ;
})