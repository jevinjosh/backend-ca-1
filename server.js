const express=require('express')
const app=express()
const PORT=process.env.PORT||3000;
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('server is running');
})

app.post('/login',(req,res)=>{
    const {Email,Password}=req.body;
   
    if(!Email||Email.trim()===''){
        return res.status(400).json({error:'Email cannot be empty'})
    }

    if(!Password||Password.trim()===''){
        return res.status(400).json({error:'Password cannot be empty'})
    }

    return res.status(200).json({
        message:'Login successfull',
        data:{Email,Password}
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})