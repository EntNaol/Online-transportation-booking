const express = require('express');
const Driver = require('../models/driver')
const router = express.Router();
const {
  createUser,
  userSignIn,
  uploadProfile,
  signOut,
} = require('../controllers/driver');
const { isAuth } = require('../middlewares/auth');
const {
  validateUserSignUp,
  userVlidation,
  validateUserSignIn,
} = require('../middlewares/validation/driver');

const multer = require('multer');

const storage = multer.diskStorage({});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('invalid image file!', false);
  }
};
const uploads = multer({ storage, fileFilter });

router.post('/create-user', validateUserSignUp, userVlidation, createUser);
router.post('/sign-in', validateUserSignIn, userVlidation, userSignIn);
router.post('/sign-out', isAuth, signOut);
router.post(
  '/upload-profile',
  isAuth,
  uploads.single('profile'),
  uploadProfile
);

router.route('/getDrivers').get((req, res) =>{
  Driver.find().
   then(drivers =>
    // res.json(drivers))
    res.status(200).send(JSON.stringify(drivers)))
  .catch(err => res.status(400).json('Error: '+ err))
/*
  then(drivers =>
    // res.json(drivers))
    res.status(200).send(JSON.stringify(drivers)))
  .catch(err => res.status(400).json('Error: '+ err));
*/
}
)


module.exports = router;
