export class Pessoa {
	id: number;
	nome: string;
	idade: number;

	constructor(id: number, nome: string, idade: number) {
		this.id = id;
		this.nome = nome;
		this.idade = idade;
	}
}

export function removerPessoaDaLista(pessoa: Pessoa, lista: Array<Pessoa>) {
	let pos = -1;
	for (let i = 0; i < lista.length; i++) {
		if (lista[i].id === pessoa.id) {
			pos = i;
			break;
		}
	}
	if (pos !== -1) {
		lista.splice(pos, 1);
	}
}