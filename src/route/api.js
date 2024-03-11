const express=require("express");
const userRegistrationController=require("../controller/userRegistrationController")
const userToDoListController=require("../controller/userToDoListController")
const authMiddleware=require("../middleware/authMiddleware")

const router=express.Router();

router.post("/userCreate",userRegistrationController.createUser)
router.get("/logIn",userRegistrationController.userLogIn);
router.get("/userProfile",authMiddleware,userRegistrationController.userProfile);
router.put("/userProfileUpdate",authMiddleware,userRegistrationController.userProfileUpdate);
router.put("/toDoListCreate",authMiddleware,userToDoListController.toDoListCreate);
router.get("/toDoListRead",authMiddleware,userToDoListController.toDoListRead);


router.put("/toDoListUpdateStatus/complete/:id",authMiddleware,userToDoListController.toDoListUpdateStatus);
router.put("/toDoListUpdateStatus/cancel/:id",authMiddleware,userToDoListController.toDoListUpdateStatusCancel);

// another way to complete and cancle task status
router.put("/toDoListStatus/:id",authMiddleware,userToDoListController.toDoListStatus);







module.exports=router;