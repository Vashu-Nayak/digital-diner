const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    name: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    cart: [
        {
            menuItem: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'MenuItem',
                required: true
            },
            quantity: {type: Number, required: true},
        },
    ],
    totalPrice: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now },
})

module.exports = mongoose.model('Order', orderSchema)
