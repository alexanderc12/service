var express = require('express');
var router = express.Router();
const axios = require('axios');


let count = 0;
let list = ['10.4.72.150:3000','10.4.74.230:3000','10.4.72.201:3000'];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/balance', function (req, res) {
    if(count < 3){
        axios.get(list[count] + "/users").then(response => {
            count++;
            res.json(response.data);
        }).catch(error => {
            res.send("Error");
        });
    }else{
    	count = 0;
    }
});

module.exports = router;
