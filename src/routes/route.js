const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:batch', function (req, res) {
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request " + JSON.stringify(requestParams))
    let studentName = requestParams.batch
    console.log('Name of the students batch is ', studentName)

    res.send('Dummy response')
})
// Assignment 1 =======================================================================================================
let movies = ["Rang de basanti", "The shining", "Lord of the ring", "Batman begins"]


router.get("/movies", function (req, res) {
    res.send(movies);
})
// Assignment 2 && 3 ======================================================
router.get("/movies/:indexNumber", function (req, res) {
    if (req.params.indexNumber < movies.length && req.params.indexNumber >= 0) {
        res.send(movies[req.params.indexNumber])
    }else {
        res.send("Please input a valid indexNumber")
    }
})
// Assignment 4 =========================================================================
moviesArray =[ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   
router.get("/films",function(req,res){
res.send(moviesArray)

})

//Assignment 5 ==================================================================================
router.get("/films/:filmId",function(req,res){
    if (req.params.filmId <= moviesArray.length && req.params.filmId > 0){
        res.send(moviesArray[req.params.filmId - 1]);


}else {
    res.send("No movie exists with this id")
   
} })




module.exports = router;