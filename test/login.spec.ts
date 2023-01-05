import { describe, expect, test } from "@jest/globals";
import { Request, Response, NextFunction } from 'express'
import axios, { AxiosAdapter, AxiosResponse } from "axios";
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
let data1=  {
  nome: generate(),
  user_name: generate(),
  email: generate(),
  senha: generate(),
  cpf: generate(),
  telefone: generate(),
};


//=========== Execução ===========
// describe("Teste efetuar login", () => {
//   it("verificação de retornar usuario logado e verificação de dados o usuario", async function () {
//     let newData= {
//       user_name: data1.user_name,
//       senha: data1.senha
//     };

//     let res =await axios
//       .post("http://localhost:5080/loginUser", newData);      
//         const logedUser = res.data;
//         console.log(res.data);
//         //======verificação status code ==========
//         expect(res.status).toBe(201);
//         //======verificação retorno dados pos login ==========
//         expect(newData).toEqual({
//           user_name:logedUser.user_name,
//           senha: logedUser.senha,
//         });
      
//   }
//   );
// });