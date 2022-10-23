import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";

export default class CadastroEnderecoTitular extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados de endereço...')
        let rua = this.entrada.receberTexto('Qual a rua?')
        let bairro = this.entrada.receberTexto('Qual o bairro?')
        let cidade = this.entrada.receberTexto('Qual a cidade?')
        let estado = this.entrada.receberTexto('Qual o estado?')
        let pais = this.entrada.receberTexto('Qual o país?')
        let codigoPostal = this.entrada.receberTexto('Qual o código postal?')
        let endereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
        this.cliente.Endereco = endereco
    }

}