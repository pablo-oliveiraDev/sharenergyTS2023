import { describe, expect, test } from "@jest/globals";
import axios, {  AxiosResponse } from "axios";
import crypto from "crypto";
//=========== Montagem de cenario =============
const generate = () => {
  return crypto.randomInt(1 ,999);
};
let num =generate();
//=========== Execução ===========
describe("teste status code http.cat", () => {
it('teste de status ',async function(){
console.log(num);
await axios
  .get(`http://localhost:5080/statusCode/?numImage${num}`)
  .then((res: AxiosResponse) => {
   
    //======verificação status code ==========
    expect(res.status).toBe(200);
  });
});

});
