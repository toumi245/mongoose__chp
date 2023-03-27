const mongoose =require('mongoose');
const {Schema,model}=mongoose;

const MovieSchema =new Schema({
    name:{
        type:String,
        required:true
    },
    rating:{type:Number}
});
const MovieDB=model("Movies",MovieSchema);


module.exports=MovieDB