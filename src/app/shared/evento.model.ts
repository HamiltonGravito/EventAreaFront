import {Endereco} from './endereco.model'

export class Evento {
    public id: number;
    public nome: string;
    public data: Date;
    public hora: Date;
    public quantidadeMaximaDePessoas: number;
    public descricao: string;
    public imagemPath: string;
    public categoria: string;
    public endereco: Endereco;
}