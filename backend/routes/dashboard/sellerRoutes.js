const sellerController = require("../../controller/dashboard/sellerController");
const { authMiddleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.get("/request-seller-get",authMiddleware, sellerController.request_seller_get);
module.exports = router;
