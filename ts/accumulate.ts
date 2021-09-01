function accumulate<T>(list: T[], acc: Function): T[] {
    // return list.map((el) => acc(el))
    const res = []
    for (const el of list) {
        res.push(acc(el))
    }
    return res
}

export default accumulate