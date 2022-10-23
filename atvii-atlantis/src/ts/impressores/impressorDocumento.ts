import Impressor from "../interfaces/impressor";
import Documento from "../modelos/documento";

export default class ImpressorDocumento implements Impressor {
    private documento: Documento

    constructor(documento: Documento) {
        this.documento = documento
    }

    imprimir(): string {
        let impressao = `| Documento:\n`
            + `| Tipo: ${this.documento.Tipo}\n`
            + `| Data expedição: ${this.documento.DataExpedicao.toLocaleDateString()}\n`
            + `| Número: ${this.documento.Numero}`
        return impressao
    }

}