/*var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('umbrella', { title: 'Search Results Umbrella' });
});
module.exports = router;*/

var express = require('express'); 
const umbrella_controlers= require('../controllers/umbrella'); 
var router = express.Router(); 
 
/* GET umbrellas */ 
router.get('/', umbrella_controlers.umbrella_view_all_Page ); 
module.exports = router; 

/* GET detail umbrella page */
router.get('/detail', umbrella_controlers.umbrella_view_one_Page);

/* GET create umbrella page */
router.get('/create', umbrella_controlers.umbrella_create_Page);