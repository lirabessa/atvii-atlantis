import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Impressor from "../interfaces/impressor";
import MenuTipoEditarCliente from "../menus/menuTipoEditarCliente";
import Cliente from "../modelos/cliente";
import EditarDadosTitular from "./editar/cliente/editarDadosCliente";
import EditarDepedente from "./editar/cliente/editarDependetes";
import EditarDocumento from "./editar/documentos/editarRg";
import EditarTipoDocumento from "./editar/documentos/editarTipoDocumento";
import EditarEnderecoTitular from "./editar/endereco/editarEnderecoTitular";
import EditarTelefone from "./editar/telefone/editarTelefone";

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
                case 3:
                    this.processo = new EditarTipoDocumento()
                    this.processo.processar()
                    break;
                case 4:
                    this.processo = new EditarTelefone()
                    this.processo.processar()
                    break;
                case 5:
                    this.processo = new EditarDepedente()
                    this.processo.processar()
                    break;
            }
    }
}