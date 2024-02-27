const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
//yo chai appointment ma k k stored garni vanera banako hoo..
    phone: String,
    date: Date,
    time: String,
    problem: String,
    signup: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'signup'
    },
    status: Boolean 
})

module.exports =  mongoose.model('Appointment', appointmentSchema)