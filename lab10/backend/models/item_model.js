const Sequelize = require("sequelize");
const db = require("./db.js");

const Car = db.define("cars", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
	name: {
    type: Sequelize.STRING(30),
    allowNull: false,
},
  description: {
    type: Sequelize.STRING(100),
    allowNull:false
},
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
},
  availability:{
    type:Sequelize.BOOLEAN,
    allowNull:false
},
  type:{
    type:Sequelize.STRING(15),
    allowNull:false
  }
});

Car.sync({force: true}).then( () => {
  console.log("Drop and re-sync db.");
});


module.exports = Car;
