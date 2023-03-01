const mongoose =require('mongoose');

const karaokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must have title for karaoke song"],
        minlength: [3, "Your soong mustbe be 3 characters long"],
    },
    
},{ timestamps: true});

module.exports = mongoose.model("Karaoke", karaokeSchema);
