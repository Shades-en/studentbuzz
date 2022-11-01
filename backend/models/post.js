var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'Faculty'},
    content: String,
    image: {
        data: Buffer,
        default: null
    },
    university: {type: Schema.Types.ObjectId, ref: 'University'},
    category: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Post', PostSchema);