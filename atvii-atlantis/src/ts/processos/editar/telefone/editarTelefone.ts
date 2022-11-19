import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import MenuTipoEditarCliente from "../../../menus/menuTipoEditarCliente";
import Cliente from "../../../modelos/cliente";

export default class EditarTelefone extends Processo{

    private listaTitular : Cliente []
    
    
    constructor(){
        super()

        this.listaTitular = Armazem.InstanciaUnica.Clientes
        
    }

    processar(): void {
        
        let numero = this.entrada.receberTexto ('Qual número do documento do Titular')
        let titular = this.listaTitular.find(titular => titular.Documentos.find(documento => documento.Numero == numero))
        console.log(titular?.Nome);

        if(titular){
            let novoDdd = this.entrada.receberTexto ('Qual novo DDD? ')
            titular.setTelefone.setNumero = novoDdd || titular.setTelefone.Ddd

            let novoNumero = this.entrada.receberTexto ('Qual novo Número? ')
            titular.setTelefone.setNumero = novoNumero || titular.setTelefone.Numero
            
        }
    }
}