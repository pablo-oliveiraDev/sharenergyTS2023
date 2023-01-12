import { Router } from "express";
import axios, { AxiosError, AxiosResponse, ResponseType } from "axios";
import { Buffer } from "buffer";
import fs from "fs";

const router = Router();
let responseType = {
  ResponseType: "arraybuffer",
};
router.get("/", async (req, res) => {
await axios.get('https://random.dog/woof.json')
 .then((response:AxiosResponse)=>{
res.send(response.data.url)
 })
  
  
});
export default router;