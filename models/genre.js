const Joi = require('joi');
const mongoose = require('mongoose');

// defining the schema within the params and then the model of genre type
const Genre = mongoose.model('Genre', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
}));

function validateGenre(genre) {
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(genre, schema);
}

exports.Genre = Genre; 
exports.validate = validateGenre;