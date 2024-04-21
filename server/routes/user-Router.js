const express = require('express');
const {signup, login, verifyToken, getUser } = require('../controller/user-controller');

const router = express.Router();



router.get('/', (req, res, next) => {
    res.send('#OUR-STYLE')
});

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser)



module.exports = router;
