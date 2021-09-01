const dic = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
};

export const toRna = (dnaStrand) => {
    let rna = '';
    for (const nuc of dnaStrand) {
        if (dic[nuc]) {
            rna += dic[nuc];
        } else {
            throw Error('Invalid input DNA.');
        }
    }
    return rna;
};
