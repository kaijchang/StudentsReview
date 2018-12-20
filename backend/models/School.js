const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema();

schoolSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v;
        ret.id = ret._id.toString();
        delete ret._id;
    },
});


module.exports = mongoose.model('School', schoolSchema, 'schools');
