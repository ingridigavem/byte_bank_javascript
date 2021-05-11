import { Cliente } from "../Cliente.js";

export class Conta{
    constructor(cliente, agencia, saldo){
        if(this.constructor == Conta) throw new Error("Você não pode estanciar um objeto do tipo Conta diretamente, pois é uma conta abstrata");
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldo;
    }

    set cliente(valorCliente){
        if(valorCliente instanceof Cliente) this._cliente = valorCliente;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }


    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato - chame apenas por outra classe");
    }
    
    _sacar(valor, taxaSaque){
        const valorSacado = taxaSaque * valor;
        if(this._saldo < valorSacado) return;
        this._saldo -= valorSacado;
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}