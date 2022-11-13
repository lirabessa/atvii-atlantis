import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Impressor from "../interfaces/impressor";
import MenuTipoEditarCliente from "../menus/menuTipoEditarCliente";
import Cliente from "../modelos/cliente";
import EditarDadosTitular from "./editar/editarDadosCliente";
import EditarEnderecoTitular from "./editar/editarEnderecoTitular";

export default class EditarCliente extends Processo{
  
    constructor(){
        super()
        this.execucao = true
        this.menu = new MenuTipoEditarCliente()
    }

    processar(): void {
        this.menu.mostrar()
        
        this.opcao = this.entrada.receberNumero('Qual opção deseja atualizar ')
        
            switch(this.opcao){
                case 1:
                    this.processo = new EditarDadosTitular()
                    this.processo.processar()
                    break;
                case 2:
                    this.processo = new EditarEnderecoTitular()
                    this.processo.processar()
                    break;
                    
            }
    }
}