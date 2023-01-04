import { Router } from "express";
import axios from "axios";
import { Buffer } from "buffer";
import fs from "fs";

const router = Router();

router.get("/", async (req, res) => {
  const numImage = req.query.numImage;
  const response = await axios.get(`https://http.cat/${numImage}`, {
    ResponseType: "arraybuffer",
  });
  const buffer64 = (Buffer.from(response.data, "binary").toString("base64"));
  //return res.sendbuffer64);
  let image = `data:${response.headers["content-type"]};base64,${buffer64}`;
  let imgFile = `<image src="${image}" />`;
  // actual image
  res.send(imgFile);
});
module.exports = router;
