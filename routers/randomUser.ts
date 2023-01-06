import { Router,Request,Response } from "express";
import axios, { AxiosResponse } from "axios";

interface randomUsers {
  name: string;  
  foto: string;
  email: string;
  username: string;
  idade: string;
}
const router = Router();

router.get("/", async (req:Request, res:Response) => {
  let num = req.query.results;
  await axios
    .get(`https://randomuser.me/api/?results=${num}`)
    .then((response: AxiosResponse) => {
      let data: randomUsers = response.data.results;
      let newData = Object.values(data).map((u) => {
        return {
          name: u.name.first + " " + u.name.last,
          foto: u.picture.large,
          email: u.email,
          username: u.login.username,
          idade: u.dob.age,
        };
       
      });
       res.status(200).json(newData);
    })
    .catch((error) => {
      res.status(400).json({ message: error });
    });
   
  
});
export default router;
