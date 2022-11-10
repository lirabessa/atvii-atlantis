import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependetes from "../../impressores/impressorDependentes";
import Cliente from "../../modelos/cliente";

export default class ListagemDependetes extends Processo{
    private clientes!: Cliente[]
    private impressor!: ImpressorDependetes
    
    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        
        console.log(`Lista de Dependentes: `);
        this.clientes.forEach(dep => {
            if(this.dependente(dep)){                
                this.impressor = new ImpressorDependetes(dep)
                console.log(this.impressor.imprimir());
            }
        })
    }

    private dependente (dependente:Cliente): boolean{
        let verificacao = false
        if(dependente.Titular != undefined){
            verificacao = true
        }        
        return verificacao
    }
}