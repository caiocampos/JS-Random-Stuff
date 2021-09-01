const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const state = {
    names: {},
    size: 0
}

export class Robot {
    constructor() {
        this.r_name = '';
    }

    get name() {
        return this.r_name = !this.r_name ? randomName() : this.r_name;
    }

    reset() {
        this.r_name = '';
    }
}

function randomNum(max) {
    return Math.round(Math.random() * max);
}

function randomChar() {
    return ALPHABET.charAt(randomNum(26));
}

function randomName() {
    if (state.size == 676000) {
        return '';
    }
    let name;
    do {
        name = `${randomChar()}${randomChar()}${randomNum(1000)}`;
    } while (state.names[name]);
    state.names[name] = true;
    state.size++;
    return name;
}

Robot.releaseNames = () => {
    state.names = {};
    state.size = 0;
};
