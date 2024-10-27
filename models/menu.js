const { DataTypes } = require('sequelize');
const sequelize = require('../config/index');

const Menu = sequelize.define('Menu', {
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  isPublished: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  shift: {
    type: DataTypes.ENUM('Lunch', 'Dinner'),
    allowNull: false,
  },
  variant: {
    type: DataTypes.ENUM('Full-Dish', 'Half-Dish'),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  menu_items: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Available', 'Closed'),
    allowNull: false,
  }
}, {
  timestamps: true,  // Enables created_at and updated_at
});

module.exports = Menu;
