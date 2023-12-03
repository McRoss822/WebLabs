
  const itemController = require("../controller/item_controller.js")
  const router = require("express").Router();

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