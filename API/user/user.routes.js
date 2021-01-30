const router = require("express").Router();
const bodyParser = require("body-parser");
const userController = require("./user.controller");
router.use(bodyParser.json());
router.post("/signup", userController.signUp);
// router.post("/login", userController.login);
// router.get("/logout",userController.logout);
// router.get("/logout",userController.update);





module.exports = router;