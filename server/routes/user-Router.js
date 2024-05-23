const express = require('express');
const {signup, login, verifyToken, getUser, forgotPassword, resetPassword } = require('../controller/user-controller');

const router = express.Router();



router.get('/', (req, res, next) => {
    res.send('#OUR-STYLE')
});

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:id/:token", resetPassword);



module.exports = router;
