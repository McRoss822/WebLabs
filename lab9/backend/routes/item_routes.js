

  const itemController = require("../controllers/item_controller")
  const router = require("express").Router();


  router.get("/cars/filter", itemController.filterCars);
  
  // Create a new item
  router.post("/cars", itemController.create);
  // Retrieve all items
  router.get("/cars", itemController.findAll);

  // Update a items with id 
  router.put("/cars/:id", itemController.findOne);
  // Delete a items with id
  router.delete("/cars/:id", itemController.delete);
  router.delete("/cars", itemController.deleteAll);

  module.exports = router;