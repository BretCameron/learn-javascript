const express = require('express');
const router = express.Router();
const removeUnusedImages = require('../../helpers/removeUnusedImages');

router.delete('/', (req, res) => {
  removeUnusedImages()
    .then(() => res.sendStatus(200));
});

module.exports = router;

