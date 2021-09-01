export const toRna = (dnaStrand) => {
    let rna = '';
    for (const nuc of dnaStrand) {
        switch (nuc) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
            default: throw Error('Invalid input DNA.');
        }
    }
    return rna;
};