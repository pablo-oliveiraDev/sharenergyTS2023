import { describe, expect, test } from "@jest/globals";
import axios, { AxiosResponse } from "axios";
import crypto from "crypto";

//=========== Montagem de cenario =============
const generate = () => {
  return crypto.randomBytes(20).toString("hex");
};

interface userPost {
  nome: String;
  user_name: String;
  email: String;
  senha: String;
  cpf: String;
  telefone: String;
  tipo: String;
}

//=========== Execução ===========
describe("teste de login", () => {

  it("teste de retorno de status e retorno user logado", async function () {
      let data = {
        user_name: "desafiosharenergy",
        senha: "sh@r3n3rgy",
      };
    await axios.post("http://localhost:5080/loginUser", data)
      .then((response: AxiosResponse) => {
      
        //=========Verifica status success ===============
        expect(response.status).toBe(200);
        //=========Verifica dados recebidos===============
        expect({
          user_name:response.data[0].user_name.toString(),
          senha:response.data[0].senha}).toEqual(data);
      });
  });
});
