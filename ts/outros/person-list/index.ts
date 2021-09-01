import {removerPessoaDaLista, Pessoa} from './pessoa'

let t1 = new Pessoa(0, 't1', 23);
let t2 = new Pessoa(4, 't4', 27);

let lista: Array<Pessoa> = [
	new Pessoa(0, 't1', 23),
	new Pessoa(1, 't2', 24),
	new Pessoa(2, 't3', 25)
];

console.log(lista);
removerPessoaDaLista(t1, lista);
console.log(lista);
removerPessoaDaLista(t2, lista);
console.log(lista);