const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

router.post('/', (req, res) => {
  const { firstName, lastName, email, password, newsletter } = req.body;
  if (!firstName || !lastName || !email || !password) return res.status(400).json({ msg: 'Please enter all fields' });

  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'Registration failed. A user with that email already exists.' });

      const newUser = new User({ firstName, lastName, email, password, newsletter });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(res.status(200).json({ msg: 'Registration successful!' }));

          // To do, add in JSON web token for login
        });
      });
    });
});

module.exports = router;