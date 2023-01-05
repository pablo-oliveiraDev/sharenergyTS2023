import { describe, expect, test } from "@jest/globals";
import { Request, Response, NextFunction } from "express";
import axios, { AxiosAdapter, AxiosResponse } from "axios";
import crypto from "crypto";

const generate = () => {
  return crypto;
};
let num =generate();
describe("teste status code http.cat", () => {
it('teste de status ',async function(){
console.log(num)
});

});
