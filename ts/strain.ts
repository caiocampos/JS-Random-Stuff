export function keep<T>(input: T[], f: Function): T[] {
    const res: T[] = []
    for (const el of input) {
        if (f(el)) {
            res.push(el)
        }
    }
    // input.forEach((el) => f(el) ? res.push(el) : void 0)
    return res
}

export function discard<T>(input: T[], f: Function): T[] {
    return keep(input, (el: T) => !f(el))
}