import Menu from "../interfaces/menu";

export default class MenuTipoExcluirCliente implements Menu{
    mostrar(): void {
        console.log(`*************************`);
        console.log(`O que você gostaria de excluir?`);
        console.log(`----------------------`)
        console.log(`| 1 - Excluir Titular`)
        console.log(`| 2 - Excluir Dependente`);        
        console.log(`----------------------`)
    }
}