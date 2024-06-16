const express = require('express');
const router = express.Router();
const AdoptAnimal = require('../models/AdoptAnimal');

// Get all adopt animals
router.get('/adoptAnimals', async (req, res) => {
    try {
        const adoptAnimals = await AdoptAnimal.find({});
       // console.log(adoptAnimals);
        res.status(200).json(adoptAnimals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
