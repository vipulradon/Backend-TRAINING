const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const logg  = require("../logger/logger")
const util = require("../util/helper")
const formatter = require("../validator/formatter")


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    let organisation = "     functionUp     ";
    let name = "Vipul";

    abc.printName()
    logg.greetings();
    util.printDate();
    util.printMonth();
    util.getBatchInfo();
formatter.trim(organisation);
formatter.changetoLowerCase(name);
formatter.changetoUpperCase(name);

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason