class FlattenArray {
    // tslint:disable-next-line: no-any
    static flatten(input: any[]): number[] {
        const res: number[] = []
        for (const el of input) {
            if (el instanceof Array) {
                /*
                for (const sub of this.flatten(el)) {
                    res.push(sub)
                }*/
                res.push(...this.flatten(el))
            } else if (!isNaN(el)) {
                res.push(el as number)
            }
        }
        return res
    }
}

export default FlattenArray