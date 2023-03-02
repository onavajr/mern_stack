const mongoose =require('mongoose');

const karaokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must have title for karaoke song"],
        minlength: [3, "Your soong mustbe be 3 characters long"],
    },
    artist: {
        type: String,
        minlength: [10,"Album art URL must be at Least 5 chars long"],
    },
    albumArtUrl: {
        type: String,
        minlength: [10, "Your album art should be 10 char long"],
    },
    videoURL: {
        type: String,
        required: [true, " must have a little for a weekend karayoke"],
    },
    gender:{
        type: String,
        required: [true, " must have10 char long"],
        enum: ["Pop", "Country", "Hiphop"],
        minlength: [3, "Your song must be at least 3 chars long"],
    },
    year: {
        type: Number,
        required: [true, "The song must be wrtten no earlier than 1930"],
    },
    lisenced: {
        type: Boolean,
        default: true,
    },


},{ timestamps: true});

module.exports = mongoose.model("Karaoke", karaokeSchema);
