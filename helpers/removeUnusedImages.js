const fs = require('fs');
const Course = require('../models/Course');

async function removeUnusedImages() {
  Course.find()
    .then(items => items.map(el => el.image_name))
    .then(result => {
      fs.readdir('./static/courseImages', (err, files) => {
        const unusedImages = [];
        files.forEach(el => {
          if (!result.includes(el)) unusedImages.push(el);
        })
        if (unusedImages.length > 0) {
          unusedImages.forEach(el => {
            fs.unlink(`./static/courseImages/${el}`, (err) => {
              if (err) throw err;
              console.log(`Successfully deleted /static/courseImages/${el}`);
            });
          });
          console.log(`Successfully removed ${unusedImages.length} images`);
        } else {
          console.log('No unused images');
        }
      })
    });
}

module.exports = removeUnusedImages;