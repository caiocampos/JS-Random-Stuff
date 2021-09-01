const fs = require('fs');

const images = [
 '/home/caio/Downloads/imagens/abertura.png',
 '/home/caio/Downloads/imagens/prod1.png',
 '/home/caio/Downloads/imagens/prod2.png',
 '/home/caio/Downloads/imagens/prod3.png',
 '/home/caio/Downloads/imagens/prod4.png',
 '/home/caio/Downloads/imagens/prod5.png',
 '/home/caio/Downloads/imagens/validade.png',
 '/home/caio/Downloads/imagens/logo.png',
 '/home/caio/Downloads/imagens/aviso.png',
];
let data = '';

for (const img of images) {
	data += `file '${img}'\n`;
}

fs.writeFileSync('res', data);
