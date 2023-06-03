import { Router } from "express";
import axios, { AxiosError, ResponseType } from "axios";
import { Buffer } from "buffer";
import fs from "fs";

const router = Router();
let responseType = {
  ResponseType: "arraybuffer",
};
router.get("/", async (req, res) => {
  const numImage = req.query.numImage;
  if (!numImage) {
    res.send(`<image src="https://http.cat/404" />`);
    return;
  }
  await axios
    .get(`https://http.cat/${numImage}`, {
      responseType: "arraybuffer",
    })
    .then((response) => {
      const buffer64 = Buffer.from(response.data, "binary").toString("base64");
      let image = `data:${response.headers["content-type"]};base64,${buffer64}`;
      let imgFile = `<img src="${image}" />`
      res.status(200).send(image);
    })
    .catch((error) => {
      
       axios.get(`https://http.cat/${407}`, {
      responseType: "arraybuffer",
    })
    .then((response) => {
      const buffer64 = Buffer.from(response.data, "binary").toString("base64");
      let image = `data:${response.headers["content-type"]};base64,${buffer64}`;
      let imgFile = `<img src="${image}" />`
      res.status(200).send(image);
    })
    });
});
export default router;