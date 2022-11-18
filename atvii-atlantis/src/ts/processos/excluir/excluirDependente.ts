"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../../abstracoes/processo"));
const armazem_1 = __importDefault(require("../../dominio/armazem"));
const impressorID_1 = __importDefault(require("../../impressores/impressorID"));
class ExcluirDependente extends processo_1.default {
    constructor() {
        super();
        this.listaTitular = armazem_1.default.InstanciaUnica.Clientes;
    }
    processar() {
        console.log('Iniciando exclusão de um Dependente');
        let numero = this.entrada.receberTexto('Qual número do documento do Titular');
        let indexTitular = this.listaTitular.findIndex(titular => titular.Documentos.find(documento => documento.Numero == numero));
        console.log(this.listaTitular[indexTitular].Nome);
        if (indexTitular != undefined) {
            this.impressor = new impressorID_1.default(this.listaTitular[indexTitular].Dependentes);
            console.log(this.impressor.imprimir());
            let indexDependente = this.entrada.receberNumero("Digite o ID do dependente: ");
            this.listaTitular = this.listaTitular[indexTitular].Dependentes.splice(indexDependente, 1);
        }
    }
}
exports.default = ExcluirDependente;
