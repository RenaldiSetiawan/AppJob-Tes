import config from "../../config/config";

const signin = async (req, res) => {
  const { user_name, user_password } = req.body;
  try {
    if (
      user_name === config.user_name &&
      user_password === config.user_password
    ) {
      res.send("Login is Succes");
    } else {
      res.send("Login is Failed");
    }
  } catch (err) {
    return res.status("400").json({
      error: "User not Found!!",
    });
  }
};

export default {
  signin,
};
