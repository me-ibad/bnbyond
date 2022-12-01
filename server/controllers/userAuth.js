const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, ForgetPassword, EmailVerify } = require("../model");
const { sendEmail } = require("../services/mailJetEmail");
const { registerUser } = require("../services/userAuthService");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
var ba64 = require("ba64");
const moment = require("moment-timezone");

const forgetPasswordVerify = async (req, res) => {
  // res.statusCode = 302;
  // res.setHeader("Location", "http://www.url.com/page");
  // res.end();

  const { uniqueId } = req.params;

  console.log(req.params);

  try {
    const Record_Exist = await ForgetPassword.findOne({
      _id: ObjectId(uniqueId),
    });

    // let email = Record_Exist.email;

    if (Record_Exist) {
      res.statusCode = 302;
      res.setHeader(
        "Location",
        "http://smarttravel.ml/updatepass/saeedartists@gmail.com/6123a41d5f24473d75894753"
      );
      res.end();
    } else {
      res.send("no record found ");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "somrthing Went Wrong" });
  }
};

const login = async (req, res) => {
  console.log(req.body);
  // Our login logic starts here
  try {
    // Get user input
    const { username, pass } = req.body;

    // Validate user input
    if (!(username && pass)) {
      return res.status(400).json({ message: "All input is required" });
    }
    // Validate if user exist in our database
    const user = await User.findOne({
      $or: [
        {
          email: username.toLowerCase(),
        },
        {
          username: username.toLowerCase(),
        },
      ],
    });

    console.log("-----------------------");
    console.log(user);

    if (user && user.pass && (await bcrypt.compare(pass, user.pass))) {
      console.log(process.env.TOKEN_Time);
      // Create token
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: process.env.TOKEN_Time,
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json({ status: true, data: user });
    } else {
      res.status(400).json({ message: "Incorrect username name or pw" });
    }
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
  // Our register logic ends here
};

const welcome = (req, res) => {
  res.json("Welcome 🙌 ");
};

const deleteAllUsers = async (req, res) => {
  let del = await User.remove();
  res.send(`done ${del}`);
};

const refreshToken = async (req, res) => {
  console.log(req.body);
  try {
    const { user_id, email } = req.body;

    const token = jwt.sign(
      { user_id: ObjectId(user_id), email },
      process.env.TOKEN_KEY,
      {
        expiresIn: process.env.TOKEN_Time,
      }
    );
    console.log("------------------------------------");
    console.log("new token:" + token);

    return res.status(200).json(token);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const registerByFb = async (req, res) => {
  try {
    const { fname, email, id, pic } = req.body;

    // Validate user input
    if (!(fname && email && id && pic)) {
      return res.status(400).json({ message: "All input are required" });
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({
      $or: [
        {
          email: email,
        },
        {
          fbId: id,
        },
      ],
    });

    if (oldUser) {
      if (oldUser.email == email && oldUser.fbId == id) {
        return res.status(200).json({ status: true, data: oldUser });
      } else {
        return res.status(400).json({
          status: false,
          data: null,
          message: "Email is already exist",
        });
      }
    } else {
      const username = uuidv4();
      const lastRecord = await User.findOne().sort({ _id: -1 }).limit(1);

      let counterId;

      if (lastRecord == null) {
        counterId = process.env.MONGO_Counter;
        ////  console.log(process.env.MONGO_Counter);
      } else {
        /////console.log(lastRecord.counterId);

        counterId = lastRecord.counterId + 1;
      }

      const user = await User.create({
        fname,

        email: email.toLowerCase(),
        fbId: id,
        /////  pic: fileName + ".jpeg",
        verify: "yes",
        registeredBy: "facebook",
        username: username,
        counterId: counterId,
      });

      console.log("Toen time  now", process.env.TOKEN_Time);

      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: process.env.TOKEN_Time,
        }
      );
      // save user token
      user.token = token;
      console.log(token);

      return res.status(200).json({ status: true, data: user });
    }
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const registerByGoogle = async (req, res) => {
  try {
    const { fname, email, id, pic } = req.body;

    // Validate user input
    if (!(fname && email && id && pic)) {
      return res.status(400).json({ message: "All input are required" });
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({
      $or: [
        {
          email: email,
        },
        {
          googleId: id,
        },
      ],
    });

    if (oldUser) {
      if (oldUser.email == email && oldUser.googleId == id) {
        return res.status(200).json({ status: true, data: oldUser });
      } else {
        return res.status(400).json({
          status: false,
          data: null,
          message: "User Already exist ",
        });
      }
    } else {
      const username = uuidv4();
      const lastRecord = await User.findOne().sort({ _id: -1 }).limit(1);

      let counterId;

      if (lastRecord == null) {
        counterId = process.env.MONGO_Counter;
        ////  console.log(process.env.MONGO_Counter);
      } else {
        /////console.log(lastRecord.counterId);

        counterId = lastRecord.counterId + 1;
      }

      const user = await User.create({
        fname,
        username: username,
        email: email.toLowerCase(),
        googleId: id,
        registeredBy: "google",
        ////   pic: fileName + ".jpeg",
        verify: "yes",

        counterId: counterId,
      });

      console.log("Toen time  now", process.env.TOKEN_Time);

      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: process.env.TOKEN_Time,
        }
      );
      // save user token
      user.token = token;
      console.log(token);

      return res.status(200).json({ status: true, data: user });
    }
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const registerByEmail = async (req, res) => {
  try {
    console.log(req.body);

    const { email, pass, username, fname } = req.body;

    // Validate user input
    if (!(email && pass && username && fname)) {
      return res.status(400).json({ message: "All input are required" });
    }
    let encryptedpass = await bcrypt.hash(pass, 10);
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({
      $or: [
        {
          email: email,
        },
        {
          username: username,
        },
      ],
    });

    if (oldUser) {
      return res.status(400).json({
        status: false,
        data: "Email is already exist",
        message: "Email is already exist",
      });
    } else {
      const lastRecord = await User.findOne().sort({ _id: -1 }).limit(1);

      let counterId;

      if (lastRecord == null) {
        counterId = process.env.MONGO_Counter;
        ////  console.log(process.env.MONGO_Counter);
      } else {
        /////console.log(lastRecord.counterId);

        counterId = lastRecord.counterId + 1;
      }

      const user = await User.create({
        username: username.toLowerCase(),
        email: email.toLowerCase(),

        fname: fname,
        registeredBy: "email",
        pass: encryptedpass,
        counterId: counterId,
      });

      console.log("Toen time  now", process.env.TOKEN_Time);

      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: process.env.TOKEN_Time,
        }
      );
      // save user token
      user.token = token;
      console.log(token);

      const VerifiedEmial = await EmailVerify.create({
        email: email.toLowerCase(),
      });

      var emailParameters = {
        email,

        uniquelink:
          process.env.websiteLink +
          "api/email/verify/" +
          email.toLowerCase() +
          "/uniqueid/" +
          VerifiedEmial._id,
      };

      let emailToSend = [
        {
          Email: email,
        },
      ];

      /// subject, data, emaile templete to select
      sendEmail(
        emailToSend,
        "Welcome to Bnbyond",
        emailParameters,
        "veerify_Email_Body"
      );

      return res.status(200).json({ status: true, data: user });
    }
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const CheckEmailOrUsername = async (req, res) => {
  try {
    const { username } = req.body;

    console.log(username);

    // Validate user input
    if (!username) {
      return res.status(400).json({ message: "All input are required" });
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({
      $or: [
        {
          email: username,
        },
        {
          username: username,
        },
      ],
    });
    console.log("------------------old user");
    console.log(oldUser);
    if (oldUser) {
      return res.status(400).json({
        status: false,
        message: "userName/Email Exist",
        data: { userExist: true },
      });
    } else {
      return res.status(200).json({ status: true, data: { userExist: false } });
    }
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const updateUserInfo = async (req, res) => {
  try {
    let pic = req.files != "" ? req.files[0].filename : "";

    /////// console.log(req.body);

    // // Get user input
    const { fname, lname, userId, address, phoneNumber } = req.body;

    let update;

    if (pic) {
      update = {
        fname: fname,
        lname: lname,
        address,
        phoneNumber,

        pic: pic,
      };
    } else {
      update = {
        fname: fname,
        lname: lname,

        address,
        phoneNumber,
      };
    }

    await User.findOneAndUpdate({ _id: ObjectId(userId) }, update);

    let updatedUser = await User.findOne({ _id: ObjectId(userId) });

    console.log(updatedUser);

    return res.status(200).json({ status: true, data: updatedUser });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const deleteUserProfile = async (req, res) => {
  try {
    // // Get user input
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "All input is required" });
    }

    const user = await User.findOne({
      _id: userId,
    });

    if (user) {
      await User.deleteOne({
        _id: userId,
      });

      return res.status(200).json({ status: true, data: "" });
    } else {
      return res
        .status(400)

        .json({
          message: "User Not Exist",
        });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const updatePassFromProfile = async (req, res) => {
  try {
    // // Get user input
    const { oldPass, newPass, userId } = req.body;

    if (!(oldPass && newPass && userId)) {
      return res.status(400).json({ message: "All input is required" });
    }

    const user = await User.findOne({
      _id: userId,
    });

    if (user && user.pass && (await bcrypt.compare(oldPass, user.pass))) {
      let encryptedpass = await bcrypt.hash(newPass, 10);

      let update = {
        pass: encryptedpass,
      };

      await User.findOneAndUpdate({ _id: ObjectId(userId) }, update);

      let updatedUser = await User.findOne({ _id: ObjectId(userId) });

      console.log(updatedUser);

      return res.status(200).json({ status: true, data: updatedUser });
    } else {
      return res
        .status(400)

        .json({
          message: "You are not Allowed to change Password.",
        });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "something Went Wrong" });
  }
};

const updateUserPassword = async (req, res) => {
  console.log(req.body);
  // Our login logic starts here
  try {
    // Get user input
    const { email, pass, uniqueId } = req.body;

    // Validate user input
    if (!(email && pass)) {
      return res.status(400).json({ message: "All input is required" });
    }
    // Validate if user exist in our database
    const user = await User.findOne({
      email,
    });

    if (user) {
      const Record_Exist = await ForgetPassword.findOne({
        $and: [
          {
            email: email,
          },
          {
            _id: ObjectId(uniqueId),
          },
        ],
      });

      if (Record_Exist) {
        let encryptedpass = await bcrypt.hash(pass, 10);

        const filter = { email: email };
        const update = { pass: encryptedpass };

        await User.findOneAndUpdate(filter, update);

        await ForgetPassword.deleteOne({
          email: email,
        });

        return res.status(200).json({
          message: "Password Has been Updated.Now please Login",
          status: true,
        });
      } else {
        return res
          .status(400)

          .json({
            message: "You are not Allowed to change Password. Check your Email",
          });
      }
    } else {
      return res.status(400).json({
        message: "You are not Allowed to change Password. Check your Email",
      });
    }
  } catch (err) {
    console.log(err);

    return res.status(400).json({ message: "something Went Wrong" });
  }
  // Our register logic ends here
};

module.exports = {
  forgetPasswordVerify,
  login,
  welcome,
  deleteAllUsers,
  refreshToken,
  registerByFb,
  registerByGoogle,
  registerByEmail,
  updateUserInfo,
  CheckEmailOrUsername,
  updateUserPassword,
  updatePassFromProfile,
  deleteUserProfile,
};
