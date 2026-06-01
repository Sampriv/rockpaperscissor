// __tests__/game.global.test.js
import fs from 'fs';
import path from 'path';

// Load browser script into Jest/jsdom global scope
const filePath = path.resolve(__dirname, '../main.js');
const script = fs.readFileSync(filePath, 'utf8');

// Evaluate script in test environment; jsdom provides `window` and `document`
eval(script);

// Now test functions exposed on globalThis/window
const { normalizeChoice, playRound, getComputerChoice, bestOf } = globalThis;

test('normalizeChoice trims and lowercases (global)', () => {
  expect(typeof normalizeChoice).toBe('function');
  expect(normalizeChoice(' Rock ')).toBe('rock');
  expect(normalizeChoice(null)).toBeNull();
});

test('playRound outcomes (global)', () => {
  expect(playRound('rock', 'scissors').result).toBe('win');
  expect(playRound('rock', 'paper').result).toBe('lose');
  expect(playRound('paper', 'paper').result).toBe('tie');
});