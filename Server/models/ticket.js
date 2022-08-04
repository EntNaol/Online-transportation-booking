const mongoose = require('mongoose');
const TicketSchema = new mongoose.Schema({
    info:{type: String , required:true},
    destination:{type: String, default:""},
    duration:{type: String , default: ""},
    ori:{type: String , default:" "},
    price:{type: String, default: ""},
    timestamp:{type: String, default: ""},
    vehicle:{type: String, default: ""}
});

const TicketModel = mongoose.model("tickets", TicketSchema);
module.exports = TicketModel;