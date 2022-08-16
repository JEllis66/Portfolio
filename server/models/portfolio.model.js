const mongoose = require("mongoose")

const PortfolioSchema = new mongoose.Schema({

    //_id

    name: {
        type: String
    },

    stuff: {
        type: String,
    },

    and: {
        type: String
    },

    such: {
        type: String
    },
    
}, {timestamps: true})


const Portfolio = mongoose.model("Portfolio", PortfolioSchema)

module.exports = Portfolio;