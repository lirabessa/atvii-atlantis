import Processo from "../../../abstracoes/processo";
import Cliente from "../../../modelos/cliente";
import Telefone from "../../../modelos/telefone";

export default class CadastroTelefone extends Processo {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Coletando os dados de endereço...')
        let ddd = this.entrada.receberTexto('Qual o ddd?')
        let numero = this.entrada.receberTexto('Qual o numero?')
        let telefone = new Telefone(ddd, numero)
        this.cliente.setTelefone = telefone
    }
}