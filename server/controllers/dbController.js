const fs = require('fs');
const path = require('path');
const Comment = require('../models/commentModel.js');

const dbController = {};

/**
 * Adds text to the database.
 */
dbController.addEntry = (req, res, next) => {  
  Comment.create({ text: req.body.text, keywords: res.locals.keywords })
    .then((data) => {
      console.log('Entry added to database:', data);
      return next();
    })
    .catch((error) => {
      return next(error);
    });
};


/**
 * Retrieves text from the database.
 */
dbController.getEntries = (req, res, next) => {
  Comment.find({ "keywords.propertyName": "propertyValue" })
    .then((data) => {
      res.locals.text = data;
      return next();
    })
    .catch((error) => {
      return next(error);
    });
}

module.exports = dbController;