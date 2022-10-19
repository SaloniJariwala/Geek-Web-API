const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema({
        name: {
            type: String,
        }
    }
);

module.exports = mongoose.model("tbl_designations", designationSchema);