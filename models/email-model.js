const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const EmailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],           
    unique: true,                                    
    lowercase: true,                             
    trim: true,                                    
    match: [                                         
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
      "Please enter a valid email address"
    ]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Email", EmailSchema);
