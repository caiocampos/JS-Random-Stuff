export const abilityModifier = (constitution) => {
  if (constitution < 3) {
    throw Error('Ability scores must be at least 3');
  }
  if (constitution > 18) {
    throw Error('Ability scores can be at most 18');
  }
  return Math.floor((constitution - 10) / 2);
};

export class Character {
  constructor() {
    this.str = Character.rollAbility();
    this.dex = Character.rollAbility();
    this.con = Character.rollAbility();
    this.int = Character.rollAbility();
    this.wis = Character.rollAbility();
    this.cha = Character.rollAbility();
    this.hp = 10 + abilityModifier(this.con);
  }

  static rollAbility() {
    let sum = 0;
    let lower = 9;
    for (let i = 0, roll; i < 4; i++) {
      roll = (Math.random() * 6) | 0;
      lower = roll < lower ? roll : lower;
      sum += roll;
    }
    return sum - lower;
  }

  get strength() {
    return this.str;
  }

  get dexterity() {
    return this.dex;
  }

  get constitution() {
    return this.con;
  }

  get intelligence() {
    return this.int;
  }

  get wisdom() {
    return this.wis;
  }

  get charisma() {
    return this.cha;
  }

  get hitpoints() {
    return this.hp;
  }
}
