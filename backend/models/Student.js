const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const studentSchema=new Schema({
    name:{type:String , required:true},
    studentId:{type:String, required:true, unique:true},
    year_of_batch: {type:String,required:true},
    collegeId: {type:String},
    skills: {type:Array},
});

module.exports=mongoose.model('Student',studentSchema);