/**
 *
 * Tests for the Monster Class
 *
 * */

import Monster from '../lib/monster.js';

test('Monster can die', () => {
  const m = new Monster();
  expect(m.hp).toBe(5);
  m.apply_damage(1);
  expect(m.hp).toBe(4);
  m.apply_damage(2);
  expect(m.hp).toBe(2);
});
