//handles profiles, fetching, adding, updating them

//handle registering user new users

const express = require('express');
const router = express.Router();

// @route GET api/profile
// @description Test route
// @access Public

router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
