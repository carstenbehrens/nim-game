export const isLegalMove = matchesSelectedState => {
	const totalSelectedMatches = getTotalSelectedMatches(matchesSelectedState)
	return (
		totalSelectedMatches > 0 &&
    totalSelectedMatches < 4 &&
    !selectedAllMatches(matchesSelectedState)
	);
};

export const getTotalSelectedMatches = matchesSelectedState =>
	matchesSelectedState.filter(match => match === true).length;

export const selectedAllMatches = matchesSelectedState => {
	return getTotalSelectedMatches(matchesSelectedState) === matchesSelectedState.length;
};

export const isGameOver = matchesState => {
	return matchesState.length <= 1;
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
