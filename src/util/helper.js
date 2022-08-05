let printDate = function(){
    console.log( new Date())
}


let printMonth = function(){
    let date1 = new Date();
    console.log(date1.getMonth())
}

let getBatchInfo = function(){

console.log("Plutonium, W3D5, the topic for today is Nodejs module system")
}


module.exports.printDate=printDate;
module.exports.printMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;