const asyncHandler = (fn) => {
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
//This uses promise to wrap the given function and then execute it in resolve or catch the error

export { asyncHandler };

// const asyncHandler = (fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
// this is done via try catch block to wrap the recieved function in try and catch and execute it
