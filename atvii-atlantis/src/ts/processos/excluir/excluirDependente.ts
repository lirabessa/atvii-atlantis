import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorID from "../../impressores/impressorID";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ExcluirDependente extends Processo{
    private listaTitular : Cliente []
    private impressor!: Impressor


    constructor(){
        super()

        this.listaTitular = Armazem.InstanciaUnica.Clientes
        
    }

    processar(): void {
        console.log('Iniciando exclusão de um Dependente');

        let numero = this.entrada.receberTexto ('Qual número do documento do Titular? ')
        let indexTitular = this.listaTitular.findIndex(titular => titular.Documentos.find(documento => documento.Numero == numero))

        console.log(this.listaTitular[indexTitular].Nome);

        
        if(indexTitular != undefined){
            this.impressor = new ImpressorID(this.listaTitular[indexTitular].Dependentes)
            console.log(this.impressor.imprimir())
            let docdep = this.entrada.receberTexto('Qual numero documento do Dependente que deseja excluir? ')
            let indexDependente = this.listaTitular.findIndex(titular => titular.Documentos.find(documento => documento.Numero == docdep))
            this.listaTitular = this.listaTitular[indexTitular].Dependentes.splice(indexDependente,1)
        }
        
        
    }
}