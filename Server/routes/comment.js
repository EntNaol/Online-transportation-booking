const router= require('express').Router();
//const VehicleModel = require('../models/vehicle');
const CommentModel = require('../models/comment');

router.route('/addcomment').post((req, res) => {
    const comment = req.body.comment ;
    const email = req.body.email ;
    const role =req.body.role ;
    const newComment = new CommentModel({comment, email, role});

    newComment.save()
    .then(() => res.json('Comment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router; 