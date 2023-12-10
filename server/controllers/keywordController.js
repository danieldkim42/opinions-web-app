const fs = require('fs');
const path = require('path');
const keyword_extractor = require("keyword-extractor");

const keywordController = {};

/**
 * takes text from req.body and generates keywords
 * stores keywords in res.locals.result and res.locals.keywords
 * res.locals.result:   array of keywords
 * res.locals.keywords: object with keywords as keys and frequency as values
 */
keywordController.generateKeywords = (req, res, next) => {
  const {text} = req.body;
  const extraction_result = keyword_extractor.extract(text,{
    language:"english",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: false
  });
  console.log(extraction_result);
  res.locals.result = extraction_result;
  res.locals.keywords = {};
  
  for (let i = 0; i < res.locals.result.length; i++) {
    if (!res.locals.keywords[res.locals.result[i]]) {
      res.locals.keywords[res.locals.result[i]] = 0;
    }
    res.locals.keywords[res.locals.result[i]]++;
  }
  return next();
};

module.exports = keywordController;