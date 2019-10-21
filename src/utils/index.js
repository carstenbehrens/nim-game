export const isLegalMove = matchesSelectedState => {
	const totalSelectedMatches = getTotalSelectedMatches(matchesSelectedState);
	return (
		totalSelectedMatches > 0 &&
		totalSelectedMatches < 4 &&
		!selectedAllMatches(matchesSelectedState)
	);
};

export const getTotalSelectedMatches = matchesSelectedState =>
	matchesSelectedState.filter(match => match === true).length;

export const selectedAllMatches = matchesSelectedState => {
	return (
		getTotalSelectedMatches(matchesSelectedState) ===
		matchesSelectedState.length
	);
};

export const isGameOver = matchesState => {
	return matchesState.length <= 1;
};

export const selectNumberOfMatches = (number, arr) => {
	for (let i = 0; i < number; i++) {
		arr[i] = !arr[i];
	}
	return arr;
};

export const getMaxNumberToSelect = matchesSelectedState => {
	const length = matchesSelectedState.length;
	return length <= 3 ? length - 1 : 3;
};

export const getInitialState = () => [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false
];

export const getBestMove = numberOfMatches => {
	if (numberOfMatches === 2) {
		return 1;
	}
	// If the remainder of numberOfMatches % 4 is 1 we return 3 so the next number is even again
	// If the remainder of numberOfMatches % 4 is 0 we return 2 so the next number is even again
	return !!numberOfMatches % 4 ? 3 : 2;
};
