const dic = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}

class Transcriptor {
    toRna(dnaStrand: string): string {
        return dnaStrand.split('').map((nuc) => {
            const val = nuc as keyof typeof dic
            if (dic[val]) {
                return dic[val]
            } else {
                throw Error('Invalid input DNA.')
            }
        }).join('')
    }
}

export default Transcriptor