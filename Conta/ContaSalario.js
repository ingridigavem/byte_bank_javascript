import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(cliente, null, 100);
    }

    sacar(valor){
        let taxaSaque = 1.01;
        super._sacar(valor, taxaSaque);
    }
}