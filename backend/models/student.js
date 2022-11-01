var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const StudentSchema = new Schema({
    uuid: String,
    usn: String,
    name: String,
    email: String,
    university: {type: Schema.Types.ObjectId, ref: 'University'},
    department: String,
    description: {
        type: String,
        default: 'No description'
    },
    skills: [{
        type: String,
        default: ''
    }],
    projects: [{
        type: String,
        default: ''
    }],
    clubs: [{type: Schema.Types.ObjectId, ref: 'Club', default: []}],   
    admin_clubs: [{type: Schema.Types.ObjectId, ref: 'Club', default: []}],
    clubs_following: [{type: Schema.Types.ObjectId, ref: 'Club', default: []}],
    class: {type: Schema.Types.ObjectId, ref: 'Class', default: null},
    notifications: [{
        sent:{
            to: {type: Schema.Types.ObjectId, ref: 'Student'},
            content: String,
            read: {type: Boolean, default: false},
            timestamp: {type: Date, default: Date.now()},
            default: []
        },
        received: {
            from: {type: Schema.Types.ObjectId, ref: 'Student'},
            content: String,
            read: {type: Boolean, default: false},
            timestamp: {type: Date, default: Date.now()},
            default: []
        }
    }]
})

module.exports = mongoose.model('Student', StudentSchema);