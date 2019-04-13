/**
 *
 * Tests for the character object
 *
 * */

import Player from '../lib/player.js';

test('Player can die', () => {
  const p = new Player();
  expect(p.hp).toBe(5);
  p.apply_damage(1);
  expect(p.hp).toBe(4);
  p.apply_damage(2);
  expect(p.hp).toBe(2);
});
