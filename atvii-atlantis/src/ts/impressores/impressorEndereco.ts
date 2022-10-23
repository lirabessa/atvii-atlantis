import Impressor from "../interfaces/impressor";
import Endereco from "../modelos/endereco";

export default class ImpressorEndereco implements Impressor {
    private endereco: Endereco
    constructor(endereco: Endereco) {
        this.endereco = endereco
    }
    imprimir(): string {
        let impressao = `| Endereco:\n`
            + `| rua: ${this.endereco.Rua}\n`
            + `| bairro: ${this.endereco.Bairro}\n`
            + `| cidade: ${this.endereco.Cidade}\n`
            + `| estado: ${this.endereco.Estado}\n`
            + `| país: ${this.endereco.Pais}\n`
            + `| código postal: ${this.endereco.Pais}`
        return impressao
    }
}