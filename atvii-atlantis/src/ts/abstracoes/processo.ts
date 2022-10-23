import Menu from "../interfaces/menu"
import Entrada from "../io/entrada"

export default abstract class Processo {
    protected opcao!: number
    protected menu!: Menu
    protected entrada = new Entrada()
    protected processo!: Processo
    protected execucao!: boolean
    public get Execucao(){
        return this.execucao
    }
    abstract processar(): void
}