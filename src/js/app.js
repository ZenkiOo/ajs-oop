/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from './Characters';

const bowman = new Bowman('Игорь', 'Bowman');
console.log(bowman);

const swordsman = new Swordsman('Федот', 'Swordsman');
console.log(swordsman);

const magician = new Magician('Тарас', 'Magician');
console.log(magician);

const daemon = new Daemon('Дима', 'Daemon');
console.log(daemon);

const undead = new Undead('Константин', 'Undead');
console.log(undead);

const zombie = new Zombie('Кристинка', 'Zombie');
console.log(zombie);
