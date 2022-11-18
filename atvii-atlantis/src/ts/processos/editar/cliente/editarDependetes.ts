import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import ImpressorDependetes from "../../../impressores/impressorDependentes";
import ImpressorID from "../../../impressores/impressorID";
import Cliente from "../../../modelos/cliente";

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
            console.log(impressor.imprimir());})
            let numerodep =this.entrada.receberTexto('Qual numero do documento? ')
            let depe = this.listaDependente.find(depe => depe.Documentos.find(documento => documento.Numero == numerodep))
            if(depe){
                let novoNome = this.entrada.receberTexto('Qual novo nome?')
                depe.setNome = novoNome || depe.Nome

                let novoNomeSocial = this.entrada.receberTexto('Qual novo nome Social?')
                depe.setNomeSocial = novoNomeSocial || depe.NomeSocial

                let novoDataNascimento = this.entrada.receberData ('Qual nova Data de Nascimento?')
                depe.setDataNascimento = novoDataNascimento || depe.DataNascimento
            }
        }

    }

    }
