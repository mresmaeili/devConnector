// form area for adding post, comments, likes...

//handle registering user new users

const express = require('express');
const router = express.Router();

// @route GET api/posts
// @description Test route
// @access Public

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
