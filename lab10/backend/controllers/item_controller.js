const Car = require('../models/item_model');
const  {Op}  = require('sequelize');


exports.filterCars = async  (req, res) => {
    try {
        const { availability, price, type } = req.query;
        const whereClause = {};

        if (availability) {
            if (availability === 'available') {
                whereClause.availability = true; 
            } else if (availability === 'unavailable') {
                whereClause.availability = false; 
            }
        }
        if (price) {
            if (price === '20000') {
                whereClause.price = { [Op.gt]: 20000 }; 
            } else if (price === '40000') {
                whereClause.price = { [Op.gt]: 40000 }; 
            } else if (price === '80000') {
                whereClause.price = { [Op.gt]: 80000 }; 
            }
        }

        if (type && type !== 'all') {
            whereClause.type = type; 
        }
       
        const filteredCars = await Car.findAll({
            where: whereClause,
        });
        
        res.status(200).json(filteredCars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server ' });
    }
};


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