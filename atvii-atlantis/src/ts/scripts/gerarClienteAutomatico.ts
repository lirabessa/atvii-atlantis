import Armazem from "../dominio/armazem";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

export default class GerarScript {
    gerar(): void{

        let cliente1 = new Cliente ( 'Natalia', 'Lira', new Date ('1992-07-11'))
        let endereco1 = new Endereco (
            'Clemente Ferreira',
            'Monte Castelo',
            'SJC',
            'SP',
            'Brasil',
            '12215330')
        let telefone1 = new Telefone ('12', '981600811')
        let documento1 = new Documento ('41488874859', TipoDocumento.CPF, new Date ('1997-07-12'))
        let documento3 = new Documento ('482115890', TipoDocumento.RG, new Date ('1992/07/11'))

        cliente1.setDocumento = documento1
        cliente1.setDocumento = documento3
        cliente1.setTelefone = telefone1
        cliente1.setEndereco = endereco1
        
        let armazem = Armazem.InstanciaUnica.Clientes
        armazem.push(cliente1)

        let dependente1 = new Cliente ( 'Maria', 'Clara', new Date ('2010-05-26'))
        endereco1 = dependente1.setEndereco = cliente1?.Endereco.clonar() as Endereco
        
        dependente1.setEndereco = endereco1

        cliente1.setDependente = dependente1
        dependente1.setTitular = cliente1

        armazem.push(dependente1)


    //**************************************************************** */


    let cliente2 = new Cliente ( 'Rodrigo', 'Digu', new Date ('1993-06-09'))
    let endereco2 = new Endereco (
        'Henrique da Silva Fontes',
        'Vila do Encontro',
        'SP',
        'SP',
        'Brasil',
        '11111111')
    let telefone2 = new Telefone ('11', '999644844')
    let documento2 = new Documento ('31322245673', TipoDocumento.CPF, new Date ('1997-07-12'))

    cliente2.setDocumento = documento2
    cliente2.setTelefone = telefone2
    cliente2.setEndereco = endereco2
    
    let armazem2 = Armazem.InstanciaUnica.Clientes
    armazem2.push(cliente2)

    let dependente2 = new Cliente ('Matheus', 'Zé Loko', new Date ('2010-07-04'))
    endereco2 = dependente2.setEndereco = cliente2?.Endereco.clonar() as Endereco
    
    dependente2.setEndereco = endereco2

    cliente2.setDependente = dependente2
    dependente2.setTitular = cliente2

    armazem.push(dependente2)


        console.log(`Cadastro Automatico do titular: ${cliente2.Nome} concluido`);
        console.log(`Cadastro Automatico do depedendente: ${dependente2.Nome} concluido`);

        console.log(`Cadastro Automatico do titular: ${cliente1.Nome} concluido`);
        console.log(`Cadastro Automatico do depedendente: ${dependente1.Nome} concluido`);

        
        
    }
}