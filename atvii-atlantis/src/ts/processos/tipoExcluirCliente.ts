import Processo from "../abstracoes/processo";
import MenuTipoExcluirCliente from "../menus/menuTipoExluir";
import ExcluirDependente from "./excluir/excluirDependente";
import ExcluirTitular from "./excluir/excluirTitular";

export default class TipoExcluirCliente extends Processo{
  
    constructor(){
        super()
        this.execucao = true
        this.menu = new MenuTipoExcluirCliente()
    }

    processar(): void {
        this.menu.mostrar()
        
        this.opcao = this.entrada.receberNumero('Qual opção deseja excluir ')
        
            switch(this.opcao){
                case 1:
                    this.processo = new ExcluirTitular()
                    this.processo.processar()
                    break;
                case 2:
                    this.processo = new ExcluirDependente()
                    this.processo.processar()
                    break;
            }
    }
}