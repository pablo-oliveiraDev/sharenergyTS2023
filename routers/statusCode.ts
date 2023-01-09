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
    axios.get('https://http.cat/404', {
      responseType: "arraybuffer",
    })
    .then((response) => {
      const buffer64 = Buffer.from(response.data, "binary").toString("base64");
      let image = `data:${response.headers["content-type"]};base64,${buffer64}`;
      let imgFile = `<image src="${image}" />`;
      res.status(404).send(imgFile);
    })
  
    return;
  }
  await axios
    .get(`https://http.cat/${numImage}`, {
      responseType: "arraybuffer",
    })
    .then((response) => {
      const buffer64 = Buffer.from(response.data, "binary").toString("base64");
      let image = `data:${response.headers["content-type"]};base64,${buffer64}`;
      let imgFile = `<image src="${image}" />`;
      res.status(200).send(image);
    })
    .catch((error) => {
      axios.get('https://http.cat/405', {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const buffer64 = Buffer.from(response.data, "binary").toString("base64");
        let image = `data:${response.headers["content-type"]};base64,${buffer64}`;
        let imgFile = `<image src="${image}" />`;
        res.status(404).send(imgFile);
      })
    });
});
export default router;
