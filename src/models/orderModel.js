const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;

const orderSchema= new mongoose.Schema({
userId:{
    type:objectId,
    ref:"user"
},
productId:{
    type:objectId,
    ref:"product"
},
amount:Number,
isFreeAppUser:Boolean,
date:{
    type:String
}
},{timestamps:true});


module.exports= mongoose.model("order",orderSchema);