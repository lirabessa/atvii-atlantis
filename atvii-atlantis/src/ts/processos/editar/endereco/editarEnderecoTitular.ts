import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";
import Endereco from "../../../modelos/endereco";


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
            titular.Endereco.setRua = novaRua || titular.Endereco.Rua

            let novoBairro = this.entrada.receberTexto('Qual novo Bairro')
            titular.Endereco.setBairro = novoBairro || titular.Endereco.Bairro

            let novoCidade = this.entrada.receberTexto('Qual nova Cidade')
            titular.Endereco.setCidade = novoCidade || titular.Endereco.Cidade

            let novoEstado = this.entrada.receberTexto('Qual novo Estado')
            titular.Endereco.setEstado = novoEstado || titular.Endereco.Estado

            let novoPais = this.entrada.receberTexto('Qual novo Pais')
            titular.Endereco.setPais = novoPais || titular.Endereco.Pais

            let novoCodigoPostal = this.entrada.receberTexto('Qual novo CEP')
            titular.Endereco.setCodigoPostal = novoCodigoPostal || titular.Endereco.CodigoPostal
        
            titular.Dependentes.forEach(dependente => {
            dependente.setEndereco = titular?.Endereco.clonar() as Endereco
            })
            
            

        }
    }
}