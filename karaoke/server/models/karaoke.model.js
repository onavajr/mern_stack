const mongoose =require('mongoose');

const karaokeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must have title for karaoke song"],
        minlength: [3, "Your soong mustbe be 3 characters long"],
    },
    artist: {
        type: String,
        minlength: [5,"Album art URL must be at Least 5 chars long"],
    },
    albumArtUrl: {
        type: String,
        minlength: [10, "Your album art should be 10 char long"],
    },
    videoURL: {
        type: String,
        minlength: [10," must have a little for a weekend karayoke"],
    },
    genre:{
        type: String,
        required: [true, "Must have karaoke genre"],
        enum: ["Pop", "Country", "Hiphop","Love Song"],
    },
    year: {
        type: Number,
        required: [true, "The song must be wrtten no earlier than 1930"],
        min: [1930, "The song must be written no earlier than 1930"],
    },
    licensed: {
        type: Boolean,
        default: true,
    },


},{ timestamps: true});

module.exports = mongoose.model("Karaoke", karaokeSchema);
