import User from "../models/User.js";
import bcrypt from "bcrypt";

const userCreated = async (req, res) => {
  try {
    const user = await User.create(req.body);
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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    console.log(user);

    let same = false;
    if (user) {
      same = await bcrypt.compare(password, user.password);
      if (same) {
        res.status(201).json({
          status: "Successfuly",
          user,
        });
      } else {
        res.status(475).json({
          status: "Unsuccessfuly",
          error: "Password wrong",
        });
      }
    } else {
      res.status(475).json({
        status: "Unsuccessfuly",
        email: "Email bulunamadı",
      });
    }
  } catch (error) {}
};
const passwordChange = async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body;
    let same = false;
    if (currentPassword === newPassword) {
      res.status(475).json({
        status: "fail",
        error: "eski şifre ile yeni şifre aynı olamaz...",
      });
    } else {
      const user = await User.findOne({ _id: userId });
      if (user) {
        same = bcrypt.compare(currentPassword, user.password);
        if (same) {
          user.password = newPassword.toString();
          await user.save();
          res.status(200).json({
            status: "Successfuly",
            user,
          });
        }
      }
    }
  } catch (error) {
    res.status(400).json({
      status: "Unsuccessfuly",
      error: "Errooorrrrr",
    });
  }
};

export { userCreated, loginUser, passwordChange};
