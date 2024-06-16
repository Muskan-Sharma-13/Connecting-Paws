const mongoose = require('mongoose');

const adoptAnimalSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    ngo: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
const AdoptAnimal=mongoose.model('AdoptAnimal', adoptAnimalSchema);
module.exports = AdoptAnimal;
