var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const facultySchema = new Schema({
    uuid: String,
    name: String,
    email: String,
    university: {type: Schema.Types.ObjectId, ref: 'University'},
    department: String,
    description: {
        type: String,
        default: 'No description'
    },
    projects: [{
        type: String,
        default: ''
    }],
    type: {
        type: String,
        enum: ['faculty', 'hod'],
        default: 'faculty'
    },
    notifications: [{
        to: {type: Schema.Types.ObjectId, ref: 'Student'},
        content: String,
        timestamp: {
            type: Date,
            default: Date.now()
        },
        read: {
            type: Boolean,
            default: false
        },
        default: []
    }]
})

module.exports = mongoose.model('Faculty', facultySchema);