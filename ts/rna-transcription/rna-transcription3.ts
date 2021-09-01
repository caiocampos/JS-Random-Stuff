const dic = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
}

type KeyDic = keyof typeof dic

class Transcriptor {
    toRna(dnaStrand: string): string {
        return dnaStrand.split('').map((nuc: KeyDic) => {
            if (dic[nuc]) {
                return dic[nuc]
            } else {
                throw Error('Invalid input DNA.')
            }
        }).join('')
    }
}

export default Transcriptor