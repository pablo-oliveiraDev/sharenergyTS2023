import {describe, expect, test} from '@jest/globals';
import axios from "axios";
import crypto from "crypto";

//=========== Montagem de cenario =============
const generate = () => {
  return crypto.randomBytes(20).toString("hex");
};
let data1 = {
  nome: generate(),
  email: generate(),
  senha: generate(),
  cpf: generate(),
  telefone: generate(),
};
let userPost = [{}];
let getUsers = {};
//=========== Execução ===========
describe("Teste simples", () => {
  it("teste verificacao get", async function () {
    await axios.get("http://localhost:5080/userLogRoutes").then((res) => {
      getUsers = res.data;
      //======verificação ==========
      expect(res.status).toBe(200);
    });
    expect(getUsers).toHaveLength(getUsers.length);
  });
});
//=========== Execução ===========
describe("Teste simples de post", () => {
  it("teste verificacao de status e dados cadastrados", async function () {
    await axios
      .post("http://localhost:5080/userLogRoutes/", data1)
      .then((res) => {
        //======verificação status success ==========

        expect(res.status).toBe(201);
      });
    //======verificação persistencia post ==========
    const res = await axios.get("http://localhost:5080/userLogRoutes");
    getUsers = res.data;

    userPost = getUsers.filter((u) => {
      return u.email === data1.email;
    }).toString();
    expect(data1).toEqual({
      nome: userPost.nome,
      email: userPost[0].email,
      cpf: userPost[0].cpf,
      senha: userPost[0].senha,
      telefone: userPost[0].telefone,
    });
  });
});
//=========== Execução ===========
describe("Teste efetuar login", () => {
  it("verificação de retornar usuario logado e verificação de dados o usuario", async function () {
    const newData = {
      email: data1.email,
      senha: data1.senha,
    };

    await axios.get("http://localhost:5080/loginUser", newData).then((res) => {
      const logedUser = res.data;

      //======verificação status code ==========
      expect(res.status).toBe(200);
      //======verificação retorno dados pos login ==========
      expect(newData).toEqual({
        email: userPost[0].email,
        senha: userPost[0].senha,
      });
    });
  });
});
describe("teste delete user", () => {
  it("verificação de persistencia e status", async function () {
    const res = await axios.get("http://localhost:5080/userLogRoutes");
    getUsers = res.data;
    userPost = getUsers.filter((u) => {
      return u.email === data1.email;
    });

    await axios
      .delete(`http://localhost:5080/userLogRoutes/${userPost[0]._id}`)
      .then((res) => {
        //======verificação status code ==========
        expect(res.status).toBe(200);
        //======verificação que o id foi excluido ==========
        expect(res.data).not.toBe({
          _id: userPost[0]._id,
        });
      });
  });
});
