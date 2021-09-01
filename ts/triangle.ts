export default class Triangle {

    sides: number[]

    constructor(...sides: number[]) {
        if (sides.length !== 3) {
            throw Error('Is not a triangle')
        }
        this.sides = sides
    }

    kind() {
        const [a, b, c] = this.sides
        if (a <= 0 || b <= 0 || c <= 0
            || a + b <= c
            || b + c <= a
            || c + a <= b) {
            throw Error('Is not a triangle')
        }
        const ab = a === b, bc = b === c
        if (ab && bc) {
            return 'equilateral'
        }
        const ca = c === a
        if (ab || bc || ca) {
            return 'isosceles'
        }
        return 'scalene'
    }
}