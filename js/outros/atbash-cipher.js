function convert(input) {
    const a = 97; // 'a'.charCodeAt(0);
    const z = 122; // 'z'.charCodeAt(0);
    const n0 = 48; // '0'.charCodeAt(0);
    const n9 = 57; // '9'.charCodeAt(0);
    const space = 32; // ' '.charCodeAt(0);
    const str = input.toLowerCase();

    let res = [];
    for (let i = 0, count = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        // ch === '0' || (ch | 0) !== 0
        if (ch >= n0 && ch <= n9) {
            res.push(ch);
            count++;
        } else if (ch >= a && ch <= z) {
            res.push(z - (ch - a));
            count++;
        }
        if (count == 5) {
            res.push(space);
            count = 0;
        }
    }
    return String.fromCharCode(...res).trimEnd();
}