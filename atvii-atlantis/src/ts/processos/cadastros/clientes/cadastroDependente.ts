import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Armazem from "../../../dominio/armazem";
import Endereco from "../../../modelos/endereco";
import CadastroEnderecoTitular from "../endereco/cadastroEnderecoTitular";
import CadastrarDocumentosCliente from "../documentos/cadastrarDocumentosCliente";
import Telefone from "../../../modelos/telefone";

export default class CadastroDepente extends Processo{
    private listaTitular : Cliente []
    constructor (){
        super()
        this.listaTitular = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        let numero = this.entrada.receberTexto ('Qual número do documento do Titular')
        let titular = this.listaTitular.find(titular => titular.Documentos.find(documento => documento.Numero == numero))
        console.log(titular?.Nome);
        

        if(titular){

            let nome = this.entrada.receberTexto('Qual seu nome?')
            let nomeSocial = this.entrada.receberTexto ('Qual seu nome Social?')
            let dataNascimento = this.entrada.receberData ('Qual sua data de nascimento?')
            let dependente = new Cliente (nome, nomeSocial, dataNascimento)

            this.processo = new CadastrarDocumentosCliente(dependente)
            this.processo.processar()

            dependente.setEndereco = titular?.Endereco.clonar() as Endereco

            dependente.setTelefone = titular.Telefones.clonar() as Telefone
            
            titular.setDependente = dependente
            dependente.setTitular = titular
            
            this.listaTitular.push(dependente)
                    
            console.log(`Finalizado cadastro do dependente do(a) ${titular.Nome}`);   

        }else{
            console.log('Titular não encontrado');
        }
    }
}