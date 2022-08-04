const router= require('express').Router();
//const VehicleModel = require('../models/vehicle');
const TicketModel = require('../models/ticket');

router.route('/addticket').post((req, res) => {
    const  ori=req.body.ori;


    const newTicket = new TicketModel({ori, });

    newTicket.save()
    .then(() => res.json('Ticket added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router; 