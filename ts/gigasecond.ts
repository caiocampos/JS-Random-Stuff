
class Gigasecond {
    gigaSDate: Date

    public constructor(d: Date) {
        d.setSeconds(d.getSeconds() + 1000000000)
        this.gigaSDate = d
    }

    public date(): Date {
        return this.gigaSDate
    }
}

export default Gigasecond