import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ListagemDependetes extends Processo {
    
    private armazem : Cliente[]
    constructor(){
        super()
        this.armazem = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        let documento = this.entrada.receberTexto('Insira o numero do documento do Titular: ')
                
        let titular = this.armazem.find(c => c.Documentos.find(d => d.Numero == documento))
        console.log(titular?.Nome);
        
    }
}