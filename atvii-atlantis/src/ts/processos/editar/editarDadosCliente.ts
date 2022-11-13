import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import MenuTipoEditarCliente from "../../menus/menuTipoEditarCliente";
import Cliente from "../../modelos/cliente";

export default class EditarDadosTitular extends Processo{

    private listaTitular : Cliente []
    
    
    constructor(){
        super()

        this.listaTitular = Armazem.InstanciaUnica.Clientes
        
    }

    processar(): void {
     
      
        let numero = this.entrada.receberTexto ('Qual número do documento do Titular')
        let titular = this.listaTitular.find(titular => titular.Documentos.find(documento => documento.Numero == numero))
        console.log(titular?.Nome);

        if(titular){
            let NovoNome = this.entrada.receberTexto('Qual seu nome?')
            titular.setNome = NovoNome
            let NovoNomeSocial = this.entrada.receberTexto ('Qual seu nome Social?')
            titular.setNomeSocial = NovoNomeSocial
            let NovoDataNascimento = this.entrada.receberData ('Qual sua data de nascimento?')
            titular.setDataNascimento = NovoDataNascimento
            console.log(`${NovoNome}, cadastrado com sucesso`);
            
        }
    }
}