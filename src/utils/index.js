import { length, not } from 'ramda';

export const isLegalMove = matchesSelectedState => {
	const totalSelectedMatches = getTotalSelectedMatches(matchesSelectedState)
	return (
		totalSelectedMatches > 0 &&
    totalSelectedMatches < 4 &&
    not(selectedAllMatches(matchesSelectedState))
	);
};

export const getTotalSelectedMatches = matchesSelectedState =>
	length(matchesSelectedState.filter(match => match === true));

export const selectedAllMatches = matchesSelectedState => {
	return getTotalSelectedMatches(matchesSelectedState) === length(matchesSelectedState);
};

export const isGameOver = matchesState => {
	return length(matchesState) <= 1;
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
