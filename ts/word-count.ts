interface Dictionary {
    [word: string]: number
}

class Words {
    private regex: RegExp

    public constructor() {
        this.regex = /\s+/g
    }

    public count(text: string): Map<string, number> {
        const res: Dictionary = { constructor: 0 }
        for (const word of text.toLocaleLowerCase().split(this.regex)) {
            if (!word) { // word === ''
                continue
            }
            res[word] = (res[word] || 0) + 1
        }
        if (!res.constructor) { // res.constructor === 0
            delete res.constructor
        }
        return new Map(Object.entries(res))
    }
}

export default Words