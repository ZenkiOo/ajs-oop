export default class Character {
  constructor(name, type) {
    this.checkName(name);
    this.checkType(type);
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack;
    this.defence;
  }

  checkName(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error(`Name ${name} is invalid.`);
    }
  }

  checkType(type) {
    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    const allowedType = types.find((newAllowedType) => newAllowedType === type);
    if (!allowedType) throw new Error(`type ${type} is invalid.`);
  }
}
