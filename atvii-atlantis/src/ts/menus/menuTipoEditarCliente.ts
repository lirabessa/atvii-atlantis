import Menu from "../interfaces/menu";

export default class MenuTipoEditarCliente implements Menu{
    mostrar(): void {
        console.log(`*************************`);
        console.log(`O que você gostaria de editar?`);
        console.log(`----------------------`)
        console.log(`| 1 - Dados Pessoais`)
        console.log(`| 2 - Endereço`);        
        console.log(`| 3 - Documentos`)
        console.log(`| 4 - Telefones`)
        console.log(`| 5 - Dependentes`);
        console.log(`----------------------`)
    }
}