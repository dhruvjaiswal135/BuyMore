const authControllers = require("../controller/authControllers");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/admin-login", authControllers.admin_login);
router.get("/get-user",authMiddleware, authControllers.getUser);
router.post("/seller-register", authControllers.seller_register); //for seller login
router.post("/seller-login", authControllers.seller_login);
module.exports = router;
