import {isLegalMove} from './utils'

describe("check if move is legal", () => {
  test('no matches are selected', () => {
    expect(isLegalMove([])).toBe(false);
  });

  test('1 matche is selected', () => {
    expect(isLegalMove([true])).toBe(true);
  });

  test('4 matches are selected', () => {
    expect(isLegalMove([true, true, true, true])).toBe(false);
  });
});
