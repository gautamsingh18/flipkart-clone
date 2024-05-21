import User from "../Models/UserSchema.js";

export const userSignup = async (req, res) => {
  try {
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.status(409).json("Username already exists");
    }
    const user = req.body;
    console.log(user);
    const newUser = new User(user);
    await newUser.save();
    return res.status(200).json({ message: "user created" });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({
      username,
      password,
    });
    if (user) {
      return res.status(200).json({ data: user });
    } else return res.status(500).json("user not found");
  } catch (error) {
    return res.json({ error: error.message });
  }
};
