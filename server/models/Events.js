const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    title: {
        type: String
    },
    filename:{
        type: String
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    allDay: {
        type: Boolean,
        default:true
    },
    color: {
        type: String
    }
},{timeStamp: true})

module.exports = Events = mongoose.model('events',eventSchema)