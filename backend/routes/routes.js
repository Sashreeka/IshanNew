const router = require('express').Router();
const signUpTemplateCopy = require("../models/SignUpModel");

const bcrypt = require("bcrypt");

router.use('/user', require('./user.routes'));

module.exports = router;
