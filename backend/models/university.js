var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UniversitySchema =  new Schema({
    name: String,
    uuid: String,
    location: String,
    description: {
        type: String,
        default: 'No description'
    },
    achievements: [{
        type: String,
    }, {default: []}],
    students: [{type: Schema.Types.ObjectId, ref: 'Student', default: []}],
    deparments: [{type: String, default: []}],
    transcript: {
        type: Buffer,
    },
    latestNews: [{
        type: String,
    }, {default: []}],
    latestEvents: [{
        type: String,
    }, {default: []}],
})

module.exports = mongoose.model('University', UniversitySchema);