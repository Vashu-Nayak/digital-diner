const express = require("express");
const Order = require("../models/orderModel");
const MenuItem = require("../models/menuModel");
const router = express.Router();

// Create a new order
router.post("/", async (req, res) => {
    try {
        const { name, phoneNumber, cart, totalPrice } = req.body;
        if(!name || !phoneNumber || !cart || !totalPrice){
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        for(const item of cart){
            const menuItem= await MenuItem.findById(item.menuItem)
            if(!menuItem){
                return res.status(404).json({ message: `Menu item with ID ${item.menuItem} not found` });
            }
        }

        const order = new Order({ name, phoneNumber, cart, totalPrice });
        await order.save()
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: "Error placing order", error });
    }
});

router.get('/:phoneNumber', async (req, res)=>{
    const { phoneNumber } = req.params
    try {
        const orders = await Order.find({ phoneNumber }).populate('cart.menuItem')
        res.json(orders)
    }
    catch(error){
        res.status(500).json({ message: "Error fetching orders", error })
    }
})

module.exports = router;
