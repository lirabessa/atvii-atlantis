import Processo from "../abstracoes/processo";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListaDependenteUnico from "./dependentes/listaDependenteUnico";
import ListagemDependetes from "./dependentes/listagemDependentes";
import ListagemTitulares from "./cliente/listagemTitulares";

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDependetes()
                this.processo.processar()
                break;
            case 3:
                this.processo = new ListaDependenteUnico()
                this.processo.processar()        
            default:
                console.log('Opção não entendida... :(')
        }
    }
}