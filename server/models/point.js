const mongoose = require('mongoose');
const PointSchema = new mongoose.Schema({
    title: String,
    des: String,
    x: Number,
    y: Number,
    v: Number,
    upLevel: Number,
    lowLevel: Number,
    createTime: Date,
    lastUpdateTime: Date,
    siblings: Object,
    tags: Object
});

module.exports = mongoose.model('Point', PointSchema, 'points');