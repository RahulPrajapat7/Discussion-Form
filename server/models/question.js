const mongoose = require('mongoose');
const { Schema } = mongoose;
const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    count: Number,

});
const question = mongoose.model('question', questionSchema);
module.exports = question