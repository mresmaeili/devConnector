// handles getting jasonWebToken for authentication

//handle registering user new users

const express = require('express');
const router = express.Router();

// @route GET api/auth
// @description Test route
// @access Public

router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
