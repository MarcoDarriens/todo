// app/models/Ad_Bundle.js
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// {} is mongoose belogns to a mixed type content or schema-less
var TodoSchema = new Schema(
    {
    	id: Number,
    	ad_bundle_name: String
    },
    {
        collection: 'ad_bundles',
        strict: false
    }
);

module.exports = mongoose.model('Todo', TodoSchema);