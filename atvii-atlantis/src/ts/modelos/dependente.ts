export default class Dependente{
    private nome: String
    private nomeSocial: String
    private dataNascimento: Date

    constructor(nome: String, nomeSocial: String, dataNascimento: Date){
        this.nome = nome
        this.nomeSocial= nomeSocial
        this.dataNascimento = dataNascimento
    }

    public get Nome(){
        return this.nome
    }
    public get NomeSocial(){
        return this.nomeSocial 
    }
    public get DataNascimento(){
        return this.dataNascimento
    }


}