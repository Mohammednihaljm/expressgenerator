var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 

  const person=["nihal","mumi","lerin"]
  const message={name:"nihal",comments:{comment:"hi nice pic",date:"27/03/2023"}}
  const person1={name:"nihal", admin:false}
  res.render('index',{message});
});

module.exports = router;
