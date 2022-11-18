import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import ImpressorDocumentos from "./impressorDocumentos";
import ImpressorEndereco from "./impressorEndereco";

export default class ImpressorDependetes implements Impressor{
    private dependente: Cliente
    private impressor!: Impressor    

    constructor(cliente : Cliente){
        this.dependente = cliente
    }

    imprimir(id?:number): string {
        let impressao = `\n`
        + `Nome do Titular do Dependente: ${this.dependente.Titular.Nome}\n`
        + `Nome: ${this.dependente.Nome}\n`
        + `Nome Social: ${this.dependente.NomeSocial}\n`
        + `Data Nascimento: ${this.dependente.DataNascimento.toLocaleDateString()}\n`
        
        // if(id != undefined ){
        //     impressao = `ID DEPENDENTE: ${id.toString()}` + impressao
        // }

        this.impressor = new ImpressorDocumentos(this.dependente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`
        // this.impressor = new ImpressorEndereco(this.dependente.Endereco)
        // impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao        
        return impressao
    }
}