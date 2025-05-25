const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");
const userModel = require("../models/user.model");

exports.signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email }); //checking if the user already exisit in db or not
    if (user) {
      return res.status(400).json({ message: "User already Exists" });
    }
    //   creating salt of the user
    const salt = await bcrypt.genSalt(8); // TODO --> make this salt large upto 12 in production
    const hashedPassword = await bcrypt.hash(password, salt);
    //   creating new user in db
    user = new UserModel({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email or Password is wrong" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Email or Password is wrong" });
    }
    // jwt
    const token = generateToken({ userId: user._id, name: user.name }); //user._id means MnogoDb unique Identifier hai har user dockerment ja, isme ek object bana rhae hai jisme userId hai aur uski value user._id (coming from mongodb) hai

    res.status(200).json({ message: "Login Successful", token });
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error ${error}` });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    res.status(200).json({ message: "User Logged out sucessfully" });
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error ${error}` });
  }
};

// TODO:Done :--> logout client side se banana hai kyuki jwt stateless hai toh uske pass token ka koi acess nhi hota

exports.linkedAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    const { service, data } = req.body;
    if (!service || !data) {
      return res.status(400).json({ message: "Service and data required" });
    }
    const encryptedData = { ...data };
    if (data.password) {
      const salt = await bcrypt.genSalt(8);
      const hashedPassword = await bcrypt.hash(data.password, salt);
      encryptedData.password = hashedPassword;
    }

    const user = await userModel.findById(userId);
    if (!user) {
      res.status(404).json({ message: "No user found" });
    }

    const exisitingIndex = user.linkedAccounts.findIndex(
      (acc) => acc.provider.toLowerClass() === service.toLowerCase()
    );
    if (existingIndex >= 0) {
      user.linkedAccounts[existingIndex].data = encryptedData;
      user.linkedAccounts[existingIndex].linkedAt = new Date();
    } else {
      user.linkedAccounts.push({ provider: service, data: encryptedData });
    }

    await user.save();
    return res.status(200).json({ message: `${service} linked successfully` });
  } catch (error) {
    console.error("Link account error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
