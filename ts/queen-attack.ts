class QueenAttack {
    black: [number, number]
    white: [number, number]

    public constructor(pos: Positioning) {
        if (pos.black[0] === pos.white[0] && pos.black[1] === pos.white[1]) {
            throw Error('Queens cannot share the same space')
        }
        this.black = pos.black
        this.white = pos.white
    }

    public toString(): string {
        let s = ''
        for (let i = 0, j = 0; i < 8; i++) {
            for (j = 0; j < 8; j++) {
                if (j !== 0) {
                    s += ' '
                }
                if (this.black[0] === i && this.black[1] === j) {
                    s += 'B'
                } else if (this.white[0] === i && this.white[1] === j) {
                    s += 'W'
                } else {
                    s += '_'
                }
            }
            s += '\n'
        }
        return s
    }

    public canAttack(): boolean {
        if (this.black[0] === this.white[0]) {
            return true
        }
        if (this.black[1] === this.white[1]) {
            return true
        }
        const y = Math.abs(this.black[0] - this.white[0])
        const x = Math.abs(this.black[1] - this.white[1])
        if (x === y) {
            return true
        }
        return false
    }
}

class Positioning {
    black: [number, number]
    white: [number, number]
}

export default QueenAttack