/**
 * Tests for the character object
 * */

import Character from '../lib/character';

test('Character default shape is correct after construction', () => {
  const c = new Character();

  expect(c.name).toBe('Hero');
  expect(c.move).toBe(5);
  expect(c.atk).toBe(1);
  expect(c.def).toBe(0);
  expect(c.hp).toBe(5);
  expect(c.dead).toBe(false);
});

test('Character constructor sets values properly', () => {
  const c = new Character({
    name: 'Test Person',
    move: 10,
    atk: 10,
    def: 5,
    hp: 10
  });

  expect(c.name).toBe('Test Person');
  expect(c.move).toBe(10);
  expect(c.atk).toBe(10);
  expect(c.def).toBe(5);
  expect(c.hp).toBe(10);
});

test('Character can have damage applied', () => {
  const c = new Character();
  expect(c.hp).toBe(5);
  c.apply_damage(1);
  expect(c.hp).toBe(4);
  c.apply_damage(2);
  expect(c.hp).toBe(2);
});

test('Character can be hit and damage waived by defense', () => {
  const c = new Character({def:1});

  expect(c.hp).toBe(5);
  // hit for 1 and with 1 defence it should stop all damage so no HP change
  c.hit(1);
  expect(c.hp).toBe(5);
  // hit for 2 and with 1 defence it should allow 1 damage to go through
  c.hit(2);
  expect(c.hp).toBe(4);
});

test('Character hit large defence does not give positive HP for damage', () => {
  const c = new Character({def: 10});

  expect(c.hp).toBe(5);
  // hit for 1 and with defence of 10 should be -9 damage - but really 0
  c.hit(1);
  expect(c.hp).toBe(5);
});

test('Character triggers death method', () => {
  const c = new Character();
  // set up a mock to test if the function gets called.
  const die_spy = jest.spyOn(c, 'die');

  expect(c.hp).toBe(5);
  c.apply_damage(5);
  expect(c.hp).toBe(0);
  expect(die_spy).toHaveBeenCalled();

  die_spy.mockRestore();
});

// TODO Test how the attack function works

