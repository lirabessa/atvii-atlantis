import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ImpressorDependetes implements Impressor{
    private dependente: Cliente    

    constructor(cliente : Cliente){
        this.dependente = cliente
    }

    imprimir(): string {
                       
        let impressao = `***********************\n`
        + `Nome do Titular do Dependente: ${this.dependente.Titular.Nome}\n`
        + `Nome: ${this.dependente.Nome}\n`
        + `Nome Social: ${this.dependente.NomeSocial}\n`
        + `Data Nascimento: ${this.dependente.DataNascimento}\n`

        
        impressao = impressao + `\n**************`        
        return impressao
    }
}