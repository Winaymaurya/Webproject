const express=require("express")
const path=require('path')
const hbs=require('hbs');
const app=express();
const port= process.env.PORT || 3000

//sataic serving
const spath=path.join(__dirname,"../public") 
const temppath=path.join(__dirname,"../templates/views") 
const partpath=path.join(__dirname,"../templates/partials") 

app.set("view engine","hbs")
app.set("views",temppath)
app.use(express.static(spath))
hbs.registerPartials(partpath)
 
//routing
app.get("/Home",(req,res)=>{
    res.render("index") 
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/wether",(req,res)=>{
    res.render("wether")
    
})
app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})