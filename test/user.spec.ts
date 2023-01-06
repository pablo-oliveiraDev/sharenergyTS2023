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
};
interface loginData {
  user_name: String;
  senha: String;
}
let data1 = {
  nome: generate(),
  user_name: generate(),
  email: generate(),
  senha: generate(),
  cpf: generate(),
  telefone: generate(),
};

//=========== Execução ===========
describe("Teste simples", () => {
  it("teste verificacao get", async function () {
    let res: AxiosResponse = await axios.get(
      "http://localhost:5080/userLogRoutes"
    );
    //======verificação ==========
    expect(res.status).toBe(200);
  });
});

//=========== Execução ===========
describe("Teste simples de post", () => {
  it("teste verificacao de status e dados cadastrados", async function () {
    await axios
      .post("http://localhost:5080/userLogRoutes/", data1)
      .then((res: AxiosResponse) => {
        //======verificação status success ==========

        expect(res.status).toBe(201);
      });

    //======verificação persistencia post ==========
    const res: AxiosResponse = await axios.get(
      "http://localhost:5080/userLogRoutes"
    );
    let getUsers = res.data;

    let userPost = getUsers.filter((usr: userPost) => {
      return usr.user_name === data1.user_name;
    });
    expect(data1).toEqual({
      nome: userPost[0].nome,
      user_name: userPost[0].user_name,
      email: userPost[0].email,
      cpf: userPost[0].cpf,
      senha: userPost[0].senha,
      telefone: userPost[0].telefone,
    });
  });
});
//=========== Execução ===========
describe("teste delete user", () => {
  it("verificação de persistencia e status", async function () {
    let res: AxiosResponse = await axios.get(
      "http://localhost:5080/userLogRoutes"
    );
    let getUsers = res.data;
    let userPost = getUsers.filter((u: userPost) => {
      return u.user_name === data1.user_name;
    });

    let response: AxiosResponse = await axios.delete(
      `http://localhost:5080/userLogRoutes/${userPost[0]._id}`
    );

    //======verificação status code ==========
    expect(response.status).toBe(200);
    //======verificação que o id foi excluido ==========
    expect(response.data).not.toBe({
      _id: userPost[0]._id,
    });
  });
});
