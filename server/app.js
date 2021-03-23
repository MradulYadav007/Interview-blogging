const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
const db=require('./db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//create
app.post('/insert',(request,response)=>{

});

//read
app.get('/getAll',(request,response)=>{
    const dbS=db.getDbInstance();
    const result=dbS.getAllData();
});

//update


//delete

app.listen(5000,() => {
    console.log('App is running');
});

