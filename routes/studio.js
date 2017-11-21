var express = require('express');
var router = express.Router();

/* GET STUDIO APPLICATION. */
router.get('/', function(req, res, next) {
    res.sendFile(__dirname+'/html/studio.html');
  });
  
  module.exports = router;