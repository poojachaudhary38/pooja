const express = require('express');
const router = express.Router();
const controller = require("../controller/authorController")
const controller1 = require("../controller/blogController")
//const userController= require("../controllers/userController")
//const authMW = require("../middleware/auth.js")



/*router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)


router.get("userI/users/:d",authMW.auth,userController.getUserData)

router.put("/users/:userId",authMW.auth,userController.updateUser)

router.delete("/users/:userId",authMW.auth,userController.deleteUser)
*/
router.post("/createAuthors",authorController.createAuthor)
router.post("/blog",blogController.createBlog)
router.put("/updatedBlog", controller1.updatedBlog)
router.put("/updatedBlog/:blogId", controller1.updatedBlog)
router.get("/blogs", controller1.getBlog)
router.delete("/deleteBlog", controller1.deleteBlog)
router.delete("/deleteBlogBy", controller1.deleteBlog)

module.exports = router;