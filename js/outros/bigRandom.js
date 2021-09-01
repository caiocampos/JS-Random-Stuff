const bigRandom = (steps) => {
    let num = '0';
    for (let i = steps; i > 0; i--) {
        num += Math.random().toString().slice(2);
    }
    return BigInt(num);
}

const bigRandomB36 = (steps) => bigRandom(steps).toString(36);
