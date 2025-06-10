const sellerController = require("../../controller/dashboard/sellerController");
const { authMiddleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.get("/request-seller-get",authMiddleware, sellerController.request_seller_get);
router.get("/get_seller/:sellerId",authMiddleware, sellerController.get_seller);
module.exports = router;
