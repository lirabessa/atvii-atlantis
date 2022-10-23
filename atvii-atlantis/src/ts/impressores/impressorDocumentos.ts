import Impressor from "../interfaces/impressor"
import Documento from "../modelos/documento"
import ImpressorDocumento from "./impressorDocumento"

export default class ImpressorDocumentos implements Impressor {
    private documentos: Documento[]
    private impressor!: Impressor

    constructor(documentos: Documento[]) {
        this.documentos = documentos
    }

    imprimir(): string {
        let impressao = ``
        for (let index = 0; index < this.documentos.length; index++) {
            this.impressor = new ImpressorDocumento(this.documentos[index])
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`
            } else {
                impressao = impressao + `\n${this.impressor.imprimir()}`
            }

        }
        return impressao
    }
}