import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


// contas
const cliente1 = new Cliente('Ricardo', 12345678901);
const contaClienteCorrente1 = new ContaCorrente(cliente1, 103);
const contaClientePoupanca1 = new ContaPoupanca(cliente1, 103, 1000);
const contaClienteSalario1 = new ContaSalario(cliente1);
console.log(contaClienteCorrente1);
console.log(contaClientePoupanca1);
console.log(contaClienteSalario1);


// funcionarios
const gerente = new Gerente("Júlio", 98765432151, 7000);
const diretor = new Diretor("Márcia", 65423598547, 15000);
console.log(diretor);
console.log(gerente);


// sistema de autenticacao
cliente1.cadastrarSenha(102030);
gerente.cadastrarSenha(987654);
diretor.cadastrarSenha(123456);

let loginEfetuado;
loginEfetuado = SistemaAutenticacao.login(cliente1, 102030);
console.log(`Teste Login cliente1 -> login efetuado? ${loginEfetuado}`);
loginEfetuado = SistemaAutenticacao.login(gerente, 987654);
console.log(`Teste Login gerente -> login efetuado? ${loginEfetuado}`);
loginEfetuado = SistemaAutenticacao.login(diretor, 156465);
console.log(`Teste Login diretor -> login efetuado? ${loginEfetuado}`);