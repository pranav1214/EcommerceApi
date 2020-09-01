module.exports = mongoose => {
    var Product = mongoose.model(
        "product",
        mongoose.Schema({
            id:Number,
            title:String,
            description:String,
            price:Number,
            category:String,
            image:String
        })
    )
    return Product;
}