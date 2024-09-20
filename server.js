const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')

const app=express();
app.use(bodyParser.urlencoded({extended:false}))
const port=process.env.PORT || 5500;
app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'/public')));
app.get("/",(req,res)=>{
    res.render("C:\\Users\\HP\\Desktop\\Backend\\car_service\\index.ejs")
})

app.listen(port,()=>{
    console.log(`Server running at port no. http://localhost:${port}`)
})