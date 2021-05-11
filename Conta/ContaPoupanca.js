import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(cliente, agencia, saldoInicial){
        super(cliente, agencia, saldoInicial);
    }
    
    sacar(valor){
        const taxaSaque = 1.02;
        super._sacar(valor, taxaSaque);
    }
}