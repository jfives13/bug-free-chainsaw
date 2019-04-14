/**
 *
 * Tests for the Equipment Class
 *
 * */

import Equipment from '../lib/equipment.js';

test('Equipment default shape is correct after construction', () => {
  const e = new Equipment();

  expect(e.name).toBe('item');
  expect(e.move).toBe(0);
  expect(e.atk).toBe(0);
  expect(e.dmg).toBe(0);
  expect(e.def).toBe(0);
  expect(e.hp).toBe(0);
});

test('Equipment constructor sets values properly', () => {
  const e = new Equipment({
    name: 'Test Item',
    move: 10,
    atk: 10,
    def: 5,
    dmg: 10,
    hp: 10
  });

  expect(e.name).toBe('Test Item');
  expect(e.move).toBe(10);
  expect(e.atk).toBe(10);
  expect(e.def).toBe(5);
  expect(e.dmg).toBe(10);
  expect(e.hp).toBe(10);
});
