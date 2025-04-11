const categoryController = require("../../controller/dashboard/categoryController");
const { authMiddleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.post("/category-add",authMiddleware, categoryController.add_category);
router.get("/category-get",authMiddleware, categoryController.get_category);
module.exports = router;
