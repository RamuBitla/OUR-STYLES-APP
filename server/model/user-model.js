const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name!"]
  },
  email: {
    type: String,
    required: [true, "please enter your email!"],
    unique: [true, "This email has already exists!"]
  },
  password: {
    type: String,
    required: [true, "Please enter your password!"],
    minlength: [6, "Password must be at least 6 characters"],
    // select: true,  
  }
});


// Convert email to lowercase before saving
// userSchema.pre('save', function(next) {
//   this.email = this.email.toLowerCase();
//   next();
// });





module.exports = mongoose.model('User', userSchema);
