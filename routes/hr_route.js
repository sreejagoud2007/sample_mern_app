let express=require('express');
let router=express.Router();

router.get("/viewemployees",(req,res)=>{
    res.send("View employees route");
});

router.post("/assign-task",(req,res)=>{
    res.send("assign-task route");
})

router.get("/viewtasks",(req,res)=>{
    res.send("viewtasks");
})

router.delete("/deleteEMP",(req,res)=>{
    res.send("deleteEMP");
})

module.exports=router;

