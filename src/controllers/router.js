const express = require("express");
const router = express.Router();
   // router.get('/api/getAllEvents', getAllEvents.get);
//404 error express route

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
   });
   if(process.env.NODE_ENV === 'test'){
    router.get("/test500",(req, res, next) => {
        try {
            throw new Error("example error")
        } catch (e) {
            next(e)
        }
    });
}
  //500 error express route
  router.use((err,req,res,next)=>{
    res.status(500);
    res.render('500');
  });

  

 module.exports = router;

