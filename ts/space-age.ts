const EARTH = 31557600;
const YEAR = new Map([
    ['earth', EARTH],
    ['mercury', EARTH * 0.2408467],
    ['venus', EARTH * 0.61519726],
    ['mars', EARTH * 1.8808158],
    ['jupiter', EARTH * 11.862615],
    ['saturn', EARTH * 29.447498],
    ['uranus', EARTH * 84.016846],
    ['neptune', EARTH * 164.79132]
]);

class SpaceAge {
    seconds: number;

    constructor(seconds: number) {
        this.seconds = seconds;
    }

    private age(planet: string): number {
        return Number((this.seconds / (YEAR.get(planet) || 1)).toFixed(2));
    }

    onEarth(): number {
        return this.age('earth');
    }

    onMercury(): number {
        return this.age('mercury');
    }

    onVenus(): number {
        return this.age('venus');
    }

    onMars(): number {
        return this.age('mars');
    }

    onJupiter(): number {
        return this.age('jupiter');
    }

    onSaturn(): number {
        return this.age('saturn');
    }

    onUranus(): number {
        return this.age('uranus');
    }

    onNeptune(): number {
        return this.age('neptune');
    }
}

export default SpaceAge;