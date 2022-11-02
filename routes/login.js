const express = require('express');
const { registerView, loginView, registerUser, loginUser } = require('../controllers/loginController');
const { protectRoute } = require("../auth/protect");
const { dashboardView } = require("../controllers/dashboardController");
const router = express.Router();

router.get('/register', registerView);
router.post('/register', registerUser);
router.get('/login', loginView);
router.post('/login', loginUser);
router.get("/dashboard", protectRoute, dashboardView);

module.exports = router;