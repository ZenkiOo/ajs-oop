import {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from '../Characters';

import { Character } from '../Character';

test('Invalid short name', () => {
  expect(() => {
    new Character('bb', 'Bowman');
    throw new Error('Name bb is invalid.');
  }).toThrow();
});

test('Invalid long name', () => {
  expect(() => {
    new Character('bbbbbbbbbbbbbbbbbbbbbb', 'Bowman');
    throw new Error('Name bbbbbbbbbbbbbbbbbbbbbb is invalid.');
  }).toThrow();
});

test('Bowman', () => {
  expect(new Bowman('Alex', 'Bowman')).toEqual({
    name: 'Alex',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Swordsman', () => {
  expect(new Swordsman('Alex', 'Swordsman')).toEqual({
    name: 'Alex',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Magician', () => {
  expect(new Magician('Alex', 'Magician')).toEqual({
    name: 'Alex',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Daemon', () => {
  expect(new Daemon('Alex', 'Daemon')).toEqual({
    name: 'Alex',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Undead', () => {
  expect(new Undead('Alex', 'Undead')).toEqual({
    name: 'Alex',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Zombie', () => {
  expect(new Zombie('Alex', 'Zombie')).toEqual({
    name: 'Alex',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
