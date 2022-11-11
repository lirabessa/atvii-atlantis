import Prototipo from "../interfaces/prototipo"

export default class Endereco implements Prototipo {
    private rua: string
    private bairro: string
    private cidade: string
    private estado: string
    private pais: string
    private codigoPostal: string

    constructor(rua: string, bairro: string, cidade: string, estado: string, pais: string, codigoPostal: string) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.pais = pais
        this.codigoPostal = codigoPostal
    }

    public get Rua() {return this.rua}
    public get Bairro() {return this.bairro}
    public get Cidade() {return this.cidade}
    public get Estado() {return this.estado}
    public get Pais() {return this.pais}
    public get CodigoPostal() {return this.codigoPostal}

    public set setRua(rua:string) {this.rua = rua}
    public set setBairro(bairro: string) { this.bairro = bairro}
    public set setCidade(cidade: string) { this.cidade = cidade}
    public set setEstado(estado: string) { this.estado = estado}
    public set setPais(pais: string) { this.pais = pais}
    public set setCodigoPostal(codigoPostal: string) { this.codigoPostal = codigoPostal}

    public clonar(): Prototipo {
        let endereco = new Endereco(this.rua, this.bairro, this.cidade, this.estado, this.pais, this.codigoPostal)
        return endereco
    }
}