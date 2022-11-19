import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ExcluirTitular extends Processo{
    private listaTitular : Cliente []


    constructor(){
        super()

        this.listaTitular = Armazem.InstanciaUnica.Clientes
        
    }

    processar(): void {
        console.log('Iniciando exclusão de um Titular');
        
        let numero = this.entrada.receberTexto ('Qual número do documento do Titular?')
        let indexTitular = this.listaTitular.findIndex(titular => titular.Documentos.find(documento => documento.Numero == numero))
        
        if (indexTitular != undefined) {
            let nome = this.listaTitular[indexTitular].Nome
            this.listaTitular = this.listaTitular.splice(indexTitular,1)
            console.log(`O cliente ${nome} foi deletado(a)!`)
        }else{
            console.log("Cliente não encontrado")
        }
        
    }
}