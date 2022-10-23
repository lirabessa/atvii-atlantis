import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

export default class GerarScriptDependente {
    gerar(): void{

        let dependente1 = new Cliente ( 'Natalia', 'Lira', new Date ('1992-07-11'))
        let endereco1 = dependente1.setEndereco = titular?.Endereco.clonar() as Endereco
        let telefone1 = new Telefone ('12', '981600811')
        let documento1 = new Documento ('41488874859', TipoDocumento.CPF, new Date ('1997-07-12'))

        dependente1.setDocumento = documento1
        dependente1.setTelefone = telefone1
        dependente1.setEndereco = endereco1

        let armazem = Armazem.InstanciaUnica.Clientes
        armazem.push(dependente1)

        console.log('Cadastro Automatico concluido');
        
    }
}