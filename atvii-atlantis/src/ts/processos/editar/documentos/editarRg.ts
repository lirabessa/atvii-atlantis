import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";

export default class EditarRg extends Processo{
    private listaDocumentos : Cliente[]
    constructor (){
        super()
        this.listaDocumentos = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        let numero = this.entrada.receberTexto ('Qual número do documento do Titular')
        let titular = this.listaDocumentos.find(titular => titular.Documentos.find(documento => documento.Numero == numero))
        console.log(titular?.Nome);

        if(titular){
            let novoNumero = this.entrada.receberTexto('Qual novo numero do rg? ')
            titular.setDocumento.setNumero = novoNumero
        }
    }
}