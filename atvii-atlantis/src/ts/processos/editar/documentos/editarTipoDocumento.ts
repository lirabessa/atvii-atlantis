import Processo from "../../../abstracoes/processo";
import MenuTipoEditarDocumento from "../../../menus/menuTipoEditarDocumento";

import EditarRg from "./editarRg";

export default class EditarTipoDocumento extends Processo{
  
    constructor(){
        super()
        this.execucao = true
        this.menu = new MenuTipoEditarDocumento()
    }

    processar(): void {
        this.menu.mostrar()
        
        this.opcao = this.entrada.receberNumero('Qual opção deseja atualizar ')
        
            switch(this.opcao){
                case 2:
                    this.processo = new EditarRg()
                    this.processo.processar()
                    break;
            }
    }
}