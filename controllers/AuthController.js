const User = require("../models/User");

exports.userCreated = async (req, res) => {
  try {
    const user = User.create(req.body);
    res.status(200).json({
      status: "Successfuly",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Unsuccessfuly",
      error,
    });
  }
};
