import { describe, expect, test } from "@jest/globals";
import axios, { AxiosResponse } from "axios";
import crypto from "crypto";

//=========== Montagem de cenario =============
const generate = () => {
  return crypto.randomInt(1, 99);
};
let num = generate();
interface randomUsers {
  name: string;
  foto: string;
  email: string;
  username: string;
  idade: string;
}
let result = generate();

//=========== Execução ===========
describe("Execução", () => {
  it("teste da api random users", async function () {
    
    await axios
      .get(`http://localhost:5080/randomUser/?results=${result}`)
      .then((res: AxiosResponse) => {
        //======verificação status ==========
        expect(res.status).toBe(200);
        let rdKey: randomUsers = res.data;
        let newRdKey = Object.values(rdKey).map((u) => {
          return {
            name: u.name,
          };
        });
        //======verificação qntidade de objetos requisitados ==========
        expect(result).toEqual(newRdKey.length);
      });
  });
});
