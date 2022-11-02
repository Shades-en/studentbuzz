var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ClubSchema = new Schema({
    name: String,
    projects: [{
        type: String,
        default: ''
    }],
    description: {
        type: String,
        default: 'No description'
    },
    admin: {type: Schema.Types.ObjectId, ref: 'Student'},
    members: [{
        _id: {type: Schema.Types.ObjectId, ref: 'Student'},
        points: {type: Number, default: 0},
        current_member: {type: Boolean, default: true}},
        {default: []}
    ],
    university: {type: Schema.Types.ObjectId, ref: 'University'},
    followers: [{type: Schema.Types.ObjectId, ref: 'Student', default: []}],
    events: [{
        id: {type: Schema.Types.ObjectId},
        name: String,
        description: String,
        image: Buffer,
    }, {default: []}],
    tasks: [{
        description: String,
        id: {type: Schema.Types.ObjectId, auto: true },
        assigned_to: {type: Schema.Types.ObjectId, ref: 'Student'},
        status: {
            type: String,
            enum: ['pending', 'claimed', 'completed'],
            default: 'pending'
        }
    }, {default: []}],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Club', ClubSchema);