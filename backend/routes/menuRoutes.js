const express = require("express");
const MenuItem = require("../models/menuModel");
const router = express.Router();

// Fetch all menu items
router.get("/", async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch menu items", error });
    }
});

router.post('/', async (req, res)=>{
    const {name, description, price, category, imageUrl}= req.body

    if(!name || !price || !category || !imageUrl){
        return res.status(400).json({message: "Please fill in all fields."})
    }

    try{
        const menuItem = new MenuItem({name, description, price, category, imageUrl})
        await menuItem.save()
        res.status(201).json(menuItem)
    }
    catch(error){
        res.status(500).json({message: "Failed to create menu item", error})
    }
})

module.exports = router;
