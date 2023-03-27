const express=require('express')
require("dotenv").config({path:"./config/.env"})
const connectDB=require("./DB/connectDB")
const MovieDB=require("./Model/model")
const app=express()
//add new movie
const Movie=new MovieDB({name:"POWER RANGER",rating:4})
Movie.save().then(console.log(Movie))
//FIND MOVIE
const findMovies=async()=>{
    try{
        const data=await MovieDB.find();
        console.log(data)
    }catch(err){
        console.log(error)
    }
}
findMovies();
const updateMovies=async()=>{
    const query={name:"POWER RANGER"}
    try {
        
        const data=await MovieDB.findOneAndUpdate(query,{name:"jakichan"})
            console.log('updated!!!')
    } catch (error) {
        console.log(error)
    }
}
updateMovies()
//find and delete
const DeleteMovie=async()=>{
    try {
        const data=await MovieDB.findOneAndDelete({ _id:"64218c08519d1727ab84a074"})
        console.log("deleted!!!!")
    } catch (error) {
        console.log(error)
    }
}
DeleteMovie()
const PORT=process.env.PORT|| 8011;
connectDB();
app.listen(PORT,(err)=>{
    err?
    console.log(err)
    :console.log(`server is run in ${PORT}`)
    
})