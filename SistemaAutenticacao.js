export class SistemaAutenticacao{
    static login(login, senha){
        if(SistemaAutenticacao.possuiAutenticacao(login)){
            return login.autenticarSenha(senha);
        }
        return false;
    }

    static possuiAutenticacao(login){
        return "autenticarSenha" in login && login.autenticarSenha instanceof Function;
    }
}