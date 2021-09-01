function squareOfSum(n: number): number {
    const sum = n * (n + 1) / 2
    return sum * sum
}

function sumOfSquares(n: number): number {
    return n * (n + 1) * (2 * n + 1) / 6
}

class Squares {
    private num: number
    private squareSum: number
    private sumSquare: number

    public constructor(n: number) {
        this.number = n
    }

    public get squareOfSum(): number {
        return this.squareSum
    }

    public get sumOfSquares(): number {
        return this.sumSquare
    }

    public get difference(): number {
        return this.squareSum - this.sumSquare
    }

    public get number(): number {
        return this.num
    }

    public set number(n: number) {
        this.num = n
        this.squareSum = squareOfSum(n)
        this.sumSquare = sumOfSquares(n)
    }
}

export default Squares