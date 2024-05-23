const bcrypt = require("bcrypt");
const User = require("../model/user-model");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer')


//? -------------------------------------------- Signup Controller -------------------------------------------------------
const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log(error);
  }

  
  if (existingUser) {
    return res.status(400).json({ message: "User already exists!" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long!" });
  }

  // Hash the password
  const salt = bcrypt.genSaltSync(11);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });


  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }

  return res.status(201).json({ message: user });
};



//? -------------------------------------------- Login Controller ------------------------------------------------------
const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    return new Error(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User not found" });
  }
  
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invaild Email / Password" });
  }
  const token = jwt.sign({ id: existingUser._id }, process.env.SECRET_KEY, {
    expiresIn: "7d",
  });
  // res.cookie(
  //   String(existingUser._id, token, {
  //     path: "/",
  //     expires: new Date(Date.now() + 1000 * 30),
  //     httpOnly: true,
  //     sameSite: "lax",
  //   })
  // );
  return res
    .status(200)
    .json({ message: "Successfully Logged In", user: existingUser, token });
};

// Token verifying the current user
const verifyToken = (req, res, next) => {
  const headers = req.headers["authorization"];
  const token = headers.split(" ")[1]; //Bearer <token>
  // const cookies = req.headers.cookie;
  // const token = cookies ? cookies.split("=")[1] : null;
  console.log(token);
  if (!token) return res.status(404).json({ message: "No Token Provided!" });
  jwt.verify(String(token), SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(400).json({ message: "Invalid Token" });
    }
    console.log(user.id); 
    req.id = user.id;
  });
  next();
};



//? ----------------------- Getting the data of a user ---------------------------------------------------
const getUser = async (req, res, next) => {
  const userId = req.id;
  let user;
  try {
    user = await User.findById(userId, "-password");
  } catch (error) {
    return new Error(error.message);
  }
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ message: user });
};

//forgot-password:
const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.send({ Status: "User not existed" });
      }
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1d",
      });
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Reset Your Password link :",
        text: `http://localhost:3000/reset-password/${user._id}/${token}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          return res.send({ Status: "Error sending email" });
        } else {
          console.log("Email sent: " + info.response);
          return res.send({ Status: "Success" });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Server error");
    });
}

//reset-password:
const resetPassword = async( req, res, next) => {
  const { id, token } = req.params
  const { password } = req.body

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      console.error("Error verifying token:", err);
      return res.status(400).json({ Status: "error with token" });
    }

    bcrypt.hash(password, 10)
      .then((hash) => {
        User.findByIdAndUpdate({ _id: id }, { password: hash })
          .then(() => res.status(200).json({ Status: "success" }))
          .catch((updateErr) => {
            console.error("Error updating password:", updateErr);
            res.status(500).json({ Status: "error updating password" });
          });
      })
      .catch((hashErr) => {
        console.error("Error hashing password:", hashErr);
        res.status(500).json({ Status: "error hashing password" });
      });
  });
}

module.exports = { signup, login, verifyToken, getUser, forgotPassword, resetPassword };
