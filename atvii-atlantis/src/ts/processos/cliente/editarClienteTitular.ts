import Processo from "../../abstracoes/processo";
import Impressor from "../../interfaces/impressor";
import MenuTipoEditarCliente from "../../menus/menuTipoEditarCliente";
import Cliente from "../../modelos/cliente";

export default class EditarCliente extends Processo{
    

    constructor(){
        super()
        this.menu = new MenuTipoEditarCliente
        this.execucao = true
    }

    processar(): void {
        
       
    }
}