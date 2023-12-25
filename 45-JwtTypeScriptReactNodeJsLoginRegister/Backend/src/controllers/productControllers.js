const User = require("../models/userModel");

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

const arr = [
  { name: "prod 1" },
  { name: "prod 2" },
  { name: "prod 3" },
  { name: "prod 4" },
  { name: "prod 5" },
];

const getAllProduct = async (req, res) => {
  // let allUser = await User.find({});
  console.log("headers burada", req.headers.authorization.split(" ")[1]);
  res.send(arr);
};

module.exports = {
  getAllProduct,
};
