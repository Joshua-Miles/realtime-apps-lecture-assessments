const Sequelize = require('sequelize')
const sequelize = require('../database.js')

sequelize.drop()
    .then( () => {
    	sequelize.sync()
            .then( () => {
            	// Create seed data here
        	})
    })

module.exports = {
    
}