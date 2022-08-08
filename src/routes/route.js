const express = require('express');
const lodash = require("lodash");
const abc = require('../introduction/intro')
const router = express.Router();
const logg  = require("../logger/logger")
const util = require("../util/helper")
const formatter = require("../validator/formatter")

let months = ["january","february","march","april","may","june","july","august","september","october","november","december"]


let oddNumbers = [1,3,5,7,9,11,13,15,17,19];

let array1 = [1,1,2,5];
let array2 = [1,7,2,10];
let array3 = [3,6,8,100];
let array4 = [1,55,12,10];
let array5 = [1,1,9,5];


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    let organisation = "     functionUp     ";
    let name = "Vipul";
// 
    abc.printName()
    logg.greetings();
    util.printDate();
    util.printMonth();
    util.getBatchInfo();
formatter.trim(organisation);
formatter.changetoLowerCase(name);
formatter.changetoUpperCase(name);
let subArrays = lodash.chunk(months,[size=3])
console.log(subArrays);
let Tail = lodash.tail(oddNumbers);
console.log(Tail);
let Union = lodash.union(array1,array2,array3,array4,array5);
console.log(Union);
let pairsObject = lodash.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])
console.log(pairsObject)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason