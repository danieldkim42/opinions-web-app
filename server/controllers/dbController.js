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
  // Get the array of keywords from res.locals.result
  const keywords = res.locals.result;

  // Initialize the query object
  let query = {};

  // Construct the query to find documents where all specified keywords exist
  for (const keyword of keywords) {
    query[`keywords.${keyword}`] = { $exists: true };
  }

  // Use the Comment model to find entries in the database that match the query
  Comment.find(query)
    .then((data) => {
      // If successful, store the retrieved data in res.locals.text
      res.locals.text = data;

      // Log the retrieved data to the console
      console.log('text: ', res.locals.text);

      // Call the next middleware or route handler in the chain
      return next();
    })
    .catch((error) => {
      // If an error occurs during the database query, pass it to the error handling middleware
      return next(error);
    });
};


module.exports = dbController;