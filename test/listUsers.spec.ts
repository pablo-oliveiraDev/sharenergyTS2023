import { describe, expect, test } from "@jest/globals";
import { Request, Response, NextFunction } from "express";
import axios, { AxiosAdapter, AxiosResponse } from "axios";
import crypto from "crypto";

//=========== Montagem de cenario =============
const generate = () => {
  return crypto.randomBytes(20).toString("hex");
};

interface userPost {
  nome: String,
  email: String,
  cpf: String,
  telefone: String,
  cep: String,
  cidade: String,
  rua: String,
  complemento: String,
  numero: String,
};

let data1 = {
  nome: generate(),
  email: generate(),
  cpf: generate(),
  telefone: generate(),
  cep: generate(),
  cidade: generate(),
  rua: generate(),
  complemento: generate(),
  numero: generate(),
};

//=========== Execução ===========
describe("Teste simples", () => {
  it("teste verificacao get", async function () {
    let res: AxiosResponse = await axios.get(
      "http://localhost:5080/listUser"
    );
    //======verificação ==========
    expect(res.status).toBe(200);
  });
});

//=========== Execução ===========
describe("Teste simples de post", () => {
  it("teste verificacao de status e dados cadastrados", async function () {
    await axios
      .post("http://localhost:5080/listUser", data1)
      .then((res: AxiosResponse) => {
        //======verificação status success ==========

        expect(res.status).toBe(201);
      });

    //======verificação persistencia post ==========
    const res: AxiosResponse = await axios.get(
      "http://localhost:5080/listUser"
    );
    let getUsers = res.data;

    let userPost = getUsers.filter((usr: userPost) => {
      return usr.nome === data1.nome;
    });
    expect(data1).toEqual({
      nome: userPost[0].nome,
      email: userPost[0].email,
      cpf: userPost[0].cpf,
      telefone: userPost[0].telefone,
      cep: userPost[0].cep,
      cidade: userPost[0].cidade,
      rua: userPost[0].rua,
      complemento: userPost[0].complemento,
      numero: userPost[0].numero,
    });
  });
});
//=========== Execução ===========
describe("teste delete user", () => {
  it("verificação de persistencia e status", async function () {
    let res: AxiosResponse = await axios.get(
      "http://localhost:5080/listUser"
    );
    let getUsers = res.data;
    let userPost = getUsers.filter((u: userPost) => {
      return u.nome === data1.nome;
    });

    let response: AxiosResponse = await axios.delete(
      `http://localhost:5080/listUser/${userPost[0]._id}`
    );

    //======verificação status code ==========
    expect(response.status).toBe(200);
    //======verificação que o id foi excluido ==========
    expect(response.data).not.toBe({
      _id: userPost[0]._id,
    });
  });
});
