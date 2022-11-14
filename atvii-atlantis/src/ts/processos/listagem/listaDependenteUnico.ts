import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependetes from "../../impressores/impressorDependentes";
import Cliente from "../../modelos/cliente";

export default class ListaDependenteUnico extends Processo {
    private clientes!: Cliente[]
    private impressor!: ImpressorDependetes

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        let numero = this.entrada.receberTexto('Qual número do documento do Titular')
        let titular = this.clientes.find(titular => titular.Documentos.find(documento => documento.Numero == numero))
        console.log(titular?.Nome);
        if (titular) {
            titular?.Dependentes.forEach(dep => {
                let impressor = new ImpressorDependetes(dep)
                console.log(impressor.imprimir());
            })
        } else {
            console.log('Não encontrado');
        }
    }
}