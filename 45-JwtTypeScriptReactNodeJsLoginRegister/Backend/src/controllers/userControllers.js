const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// jwt burada verildi

const login = async (req, res) => {
  const user = req.body;
  // console.log(user);

  try {
    let findUser = await User.findOne({ email: user.email });

    if (findUser) {
      const token = jwt.sign(
        { email: user.email, userName: user.userName },
        process.env.SECRET_TOKEN,
        {
          expiresIn: "20s",
        }
      );
      console.log("token", token);

      return res.status(200).send(token);
    } else {
      return res.status(201).send("duzgun email daxil edin");
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};

const postUser = async (req, res) => {
  const user = req.body;

  try {
    let findUser = await User.findOne({ email: user.email });

    if (findUser) {
      return res.status(201).send("bu idli element var");
    }

    {
      // console.log(req.body);
      const newUser = new User(req.body);
      // console.log(newUser);
      newUser.save();

      res.status(200).send({
        message: "istifadeci ugurla qeydiyyatdan kecdi",
      });
    }
  } catch {
    (err) => {
      console.log(err);
      return err;
    };
  }
};

const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
};

const getUserById = async (req, res) => {
  // console.log(req.params);
  let id = req.params.id;
  let findUser = await User.findOne({ id: id });
  // console.log(findUser);
  res.send(findUser);
};

const getDeleteUser = async (req, res) => {
  // console.log(req.params);
  let id = req.params.id;
  let findUser = await User.findOne({ id: id });
  // console.log("fatma", findUser);
  let _id = findUser._id;
  let deletedUser = await User.findByIdAndDelete(_id);
  // console.log("delete", deletedUser);
};

const getUpdateUser = async (req, res) => {
  // console.log(req.params);
  let id = req.params.id;
  let updateUser = await User.findOneAndUpdate(
    { id: id },
    // { name: req.body.name }
    req.body
  );
};

const getPutUser = async (req, res) => {
  let id = req.params.id;
  let updateUser = await User.replaceOne({ id: id }, req.body);
};

module.exports = {
  postUser,
  getAllUser,
  getUserById,
  getDeleteUser,
  getUpdateUser,
  getPutUser,
  login,
};
