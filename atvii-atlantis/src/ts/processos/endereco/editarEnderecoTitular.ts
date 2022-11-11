import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";


export default class EditarEnderecoTitular extends Processo{

    private listaEndereco : Cliente[]

    constructor(){
        super()

        this.listaEndereco = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        let numero = this.entrada.receberTexto ('Qual número do documento do Titular')
        let titular = this.listaEndereco.find(titular => titular.Documentos.find(documento => documento.Numero == numero))
        console.log(titular?.Nome);

        if (titular){
            let novaRua = this.entrada.receberTexto('Qual nova rua?')
            titular.setEndereco.setRua = novaRua

            let novoBairro = this.entrada.receberTexto('Qual novo Bairro')
            titular.setEndereco.setBairro = novoBairro

            let novoCidade = this.entrada.receberTexto('Qual nova Cidade')
            titular.setEndereco.setCidade = novoCidade

            let novoEstado = this.entrada.receberTexto('Qual novo Estado')
            titular.setEndereco.setEstado = novoEstado

            let novoPais = this.entrada.receberTexto('Qual novo Pais')
            titular.setEndereco.setPais = novoPais

            let novoCodigoPostal = this.entrada.receberTexto('Qual novo CEP')
            titular.setEndereco.setCodigoPostal = novoCodigoPostal
        
        }
    }
}