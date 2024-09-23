let User = require("../Models/userModel");
let jwt = require("jsonwetoken");
let secretkey = "my_secret_key";
let bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  let { name, password, email } = req.body;

  let hashPassword = await bcrypt.hash(String(password), 10);
  password = hashPassword;

  try {
    let user = User({ name, password, email });
    await user.save();
    res.json({ status: "success", message: "user created" });
  } catch (error) {
    res.json({ status: "failed", message: error.message });
  }
};

//Login Controller
exports.login = async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    // console.log(user)

    if (user) {
      let match = await bcrypt.compare(String(password), user.password);
      if (match) {
        let token = jwt.sign({ email: user.email }, secretkey, {
          expiresIn: "3d",
        });

        res.json({
          status: "success",
          token: token,
          message: "login success successfully",
        });
      } else {
        res.json({ status: "failed", message: "wrong password" });
      }
    } else {
      res.json({ status: "failed", message: "user dosenot exist" });
    }
  } catch (error) {
    res.json({ status: "failed", message: error.message });
  }
};
