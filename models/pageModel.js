const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const pageSchema = new Schema({
    label: { 
        type: String,
        required: true
    },
    graph: {
        type: Schema.Types.ObjectId,
        ref: 'Graph'
    },
    slug: String, 
    content: String,
    wordCount: Number
    });

const Page = mongoose.model('Page', pageSchema);
module.exports = Page;
