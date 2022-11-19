import Prototipo from "../interfaces/prototipo"

export default class Telefone implements Prototipo {
    private ddd: string
    private numero: string

    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }
    
    public get Ddd() { return this.ddd }
    public get Numero() { return this.numero }

    public set setDdd(ddd:string) { this.ddd = ddd}
    public set setNumero(numero:string) {this.numero = numero }


    public clonar(): Prototipo {
        let telefone = new Telefone(this.ddd, this.numero)
        return telefone
    }
}