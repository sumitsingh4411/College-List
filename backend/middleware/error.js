const {ValidationError} =require('joi');
const errorHandler = (err, req, res, next) => {
   let statuscode=500;
   let data={
       message:'Internal server error'
   }

   if(err instanceof ValidationError)
   {
       statuscode=422;
   }

   return res.status(statuscode).json(data);
}

module.exports=errorHandler;