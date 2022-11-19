import Processo from "../../../abstracoes/processo";
import MenuTipoEditarDocumento from "../../../menus/menuTipoEditarDocumento";
import EditarCpf from "./editarCpf";
import EditarPassaporte from "./editarPassaporte";

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

                case 1:
                    this.processo = new EditarCpf()
                    this.processo.processar()
                    break;
                case 2:
                    this.processo = new EditarRg()
                    this.processo.processar()
                    break;
                case 3:
                    this.processo = new EditarPassaporte()
                    this.processo.processar()
                    break;    
            }
    }
}