const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const { getDashboard } = require("../controllers/dashboardController");

// protected route
router.get("/", authMiddleware, getDashboard);

module.exports = router;
