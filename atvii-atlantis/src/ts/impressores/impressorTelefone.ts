import Impressor from "../interfaces/impressor";
import Telefone from "../modelos/telefone";

export default class ImpressorTelefones implements Impressor {
    private telefone: Telefone 
    constructor(telefone: Telefone) {
        this.telefone = telefone
    }
    imprimir(): string {

        let impressao = `| Telefone:\n`
            + `| DDD: ${this.telefone.Ddd}\n`
            + `| Numero: ${this.telefone.Numero}\n`
        return impressao
    }
}