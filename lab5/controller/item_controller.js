const Car = require('../models/item_model');

// Create & Save a new item
exports.create = (req, res) => {

    // Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a item
    const item = {
    name: req.body.title,
    engine_power: req.body.enginePower,
    }

    // Create and Save a new Item
    Car.create(item)
    .then(data =>{res.send(data);})
    .catch(err => {
    res.status(500).send({
    message: 
    err.message = "Some error occured while creating the Item."
        });
    });
};

// Retrieve all items from the database
exports.findAll = (req, res) => {

    Car.findAll()
    .then(data => {
            res.send(data)
    })
        .catch(err => {
        res.status(500).send({
    message: 
    err.message = "Some error occured while finding the Item."
        });
    });
};

exports.deleteAll = (req, res) => {
        
        Car.destroy({ where: {} })
        .then(res.status(204).send())
        .catch (err => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
}       


// update item
exports.findOne = async (req, res) => {
    try {
        const _id = req.params.id;
        const record = await Car.findOne({ where: { id: _id } });
        if (!record) {
            throw new Error('No record found');
        } 
        record.name = req.body.title;
        record.engine_power = req.body.enginePower;
        await record.save();
        res.status(200).json({ message: 'Record updated successfully' });
        } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};  

exports.delete = (req, res) => {
    const id = req.params.id;
    Car.destroy({
        where: {id: id} 
    })
        .then(num => {
        if(num[0] == 1) {
        res.send({
    message: "Item was deleted successfully."
            });
        } else {
    res.send({
        message: "Cannot delete Item with id=${id}. Maybe Item was not found."
            });
        }
    })
        .catch(err => {
        res.status(500).send({
        message: "Could not delete Item with id=" + id
        })
    });
};