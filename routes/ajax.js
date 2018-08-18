const express = require('express');
const router = express.Router();

const viewConfig = {
    title: "Async Await with Ajax, Promises and Callbacks"
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('ajax', viewConfig);
});

module.exports = router;