export class Clock {
  constructor(hours, minutes) {
    this.minutes = normalize((hours || 0) * 60 + (minutes || 0));
  }

  toString() {
    const hours = (this.minutes / 60) | 0;
    const minutes = this.minutes % 60;
    return `${pad(hours)}:${pad(minutes)}`;
  }

  plus(minutes) {
    this.minutes = normalize(this.minutes + (minutes || 0));
    return this;
  }

  minus(minutes) {
    return this.plus(-(minutes || 0));
  }

  equals(clock) {
    return this.minutes === clock.minutes;
  }
}

function pad(val) {
  return val >= 10 ? val : `0${val}`;
}

function normalize(val) {
    while (val < 0) {
        val += 1440;
    }
    return val % 1440;
}