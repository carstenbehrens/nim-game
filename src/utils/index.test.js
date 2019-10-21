import {
	isLegalMove,
	isGameOver,
	getTotalSelectedMatches,
	selectNumberOfMatches,
  getMaxNumberToSelect,
  getBestMove
} from './index';

describe('check if move is legal', () => {
	test('no matches are selected', () => {
		expect(isLegalMove([false, false])).toBe(false);
	});

	test('1 match is selected', () => {
		expect(isLegalMove([true, false, false])).toBe(true);
	});

	test('4 matches are selected', () => {
		expect(isLegalMove([true, true, true, true, false, false])).toBe(false);
	});

	test('return sum of selected matches', () => {
		expect(getTotalSelectedMatches([true, true])).toBe(2);
	});
});

describe('check if game is over', () => {
	test('one match is left, game is over', () => {
		expect(isGameOver([false])).toBe(true);
	});

	test('four matches left, game is still going', () => {
		expect(isGameOver([false, false, false, false])).toBe(false);
	});
});

test('should select a number of matches', () => {
	expect(selectNumberOfMatches(3, [false, false, false, false])).toMatchObject([
		true,
		true,
		true,
		false
	]);
});

describe('get the max number of matches that can be selected', () => {
	test('Only one match can be selected if two are left', () => {
		expect(getMaxNumberToSelect([false, false])).toBe(1);
  });
  
	test('Only two matches can be selected if three are left', () => {
		expect(getMaxNumberToSelect([false, false, false])).toBe(2);
  });

	test('Three matches can be selected', () => {
		expect(getMaxNumberToSelect([false, false, false, false, false, false])).toBe(3);
	});
});

describe('get the best possible move', () => {
  test('Only one match should be selected if two are left', () => {
    expect(getBestMove(2)).toBe(1)
  })

  test('Remove enough matches to leave one', () => {
    expect(getBestMove(4)).toBe(3)
  })
})