const authControllers = require("../controller/authControllers");
const { authMiddleware } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/admin-login", authControllers.admin_login);
router.get("/get-user",authMiddleware, authControllers.getUser);

module.exports = router;
