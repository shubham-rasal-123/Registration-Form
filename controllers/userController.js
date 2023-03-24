import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
class UserController {
  static home = (req, res) => {
    res.render("index");
  };
  static registration = (req, res) => {
    res.render("registration");
  };

  static createUserDoc = async (req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    try {
      const doc = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });
      // saving document
      await doc.save();
      res.redirect("/login");
    } catch (error) {
      console.log(error);
    }
  };

  static login = (req, res) => {
    res.render("login");
  };

  static verifyLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await UserModel.findOne({ email: email });

      if (result != null) {
        const isMatch = await bcrypt.compare(password, result.password);
        if (result.email == email && isMatch) {
          res.send(`<h1>Dashboard ---- ${result}</h1>`);
        } else {
          res.send("<h1>Email or Password is not Valid</h1>");
        }
      } else {
        res.send("<h1>You are not a Registered User</h1>");
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserController;
