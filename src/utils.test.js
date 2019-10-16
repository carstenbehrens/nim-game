import {isLegalMove, isGameOver} from './utils'

describe("check if move is legal", () => {
  test('no matches are selected', () => {
    expect(isLegalMove([])).toBe(false);
  });

  test('1 match is selected', () => {
    expect(isLegalMove([true, false, false])).toBe(true);
  });

  test('4 matches are selected', () => {
    expect(isLegalMove([true, true, true, true])).toBe(false);
  });
});

describe("check if game is over", () => {
  test('one match is left, game is over', () => {
    expect(isGameOver([false])).toBe(true);
  });

  test('four matches left, game is still going', () => {
    expect(isGameOver([false, false, false, false])).toBe(false);
  });
});