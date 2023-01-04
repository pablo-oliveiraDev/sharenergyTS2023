import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/", async (req, res) => {
  let data = "";
  await axios.get("https://randomuser.me/api/?results=20").then((res) => {
    data = res.data.results;
  });
  let newData = Object.values(data).map((u) => {
    return {
      nome: u.name.first + " " + u.name.last,
      foto: u.picture.large,
      email: u.email,
      username: u.login.username,
      idade: u.dob.age,
    };
  });
  try {
    res.status(200).json(newData);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});
export default router;
