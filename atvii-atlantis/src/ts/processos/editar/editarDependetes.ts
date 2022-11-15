import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependetes from "../../impressores/impressorDependentes";
import Cliente from "../../modelos/cliente";

export default class EditarDepedente extends Processo{
    private listaDependente : Cliente []
    constructor(){
        super()
        this.listaDependente = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        let numero = this.entrada.receberTexto ('Qual número do documento do Titular')
        let titular = this.listaDependente.find(titular => titular.Documentos.find(documento => documento.Numero == numero))
        console.log(titular?.Nome);

        if(titular){
            titular?.Dependentes.forEach(dep => {
                let impressor = new ImpressorDependetes(dep)
                console.log(impressor.imprimir());

                console.log('Qual ID do dependente? ');
                
            })

        }

    }
}