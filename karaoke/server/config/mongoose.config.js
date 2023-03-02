const mongoose = require('mongoose');
const db_name = "karaoke";

mongoose.connect("mongodb://127.0.0.1:27017/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("successfully connected to the " + db_name + " database"))
    .catch((err) => {
        console.log("cannot connect to database" + db_name + ":")
        console.log(err);
    });