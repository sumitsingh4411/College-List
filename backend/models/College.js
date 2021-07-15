const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const collegeSchema=new Schema({
    name:{type:String , required:true, unique:true},
    collegeId:{type:String, required:true, unique:true},
    founded_year: {type:String},
    city: {type:String},
    state:{type:String} ,
    country: {type:String},
    students: {type:String},
    courses: {type:Array},
});

module.exports=mongoose.model('College',collegeSchema);