const fs = require('fs');

function base64_encode(file) {
    const bitmap = fs.readFileSync(file);
    return Buffer.from(bitmap).toString('base64');
}

function base64_decode(base64str, file) {
    fs.writeFileSync(file, Buffer.from(base64str, 'base64'));
}

function read(file) {
    const bitmap = fs.readFileSync(file);
    return Buffer.from(bitmap).toString();
}

function write(str, file) {
    fs.writeFileSync(file, Buffer.from(str));
}

const base64str = base64_encode('info.txt');
write(base64str, 'a.txt');
const str = read('a.txt');
base64_decode(base64str, 'b.txt');