import { length, not } from 'ramda';

export const isLegalMove = matchesSelectedState => {
	const totalSelectedMatches = getTotalSelectedMatches(matchesSelectedState)
	return (
		totalSelectedMatches > 0 &&
    totalSelectedMatches < 4 &&
    not(selectedAllMatches(matchesSelectedState))
	);
};

const getTotalSelectedMatches = matchesSelectedState =>
	matchesSelectedState.filter(match => match === true);

const selectedAllMatches = matchesSelectedState => {
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
