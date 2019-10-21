/**
 * Checks if the current move (selected matches) is legal
 * @param {Array} matchesSelectedState
 * @returns {Boolean} - True if legal
 */
export const isLegalMove = matchesSelectedState => {
	const totalSelectedMatches = getTotalSelectedMatches(matchesSelectedState);
	return (
		totalSelectedMatches > 0 &&
		totalSelectedMatches < 4 &&
		!selectedAllMatches(matchesSelectedState)
	);
};

/**
 * Get the total amount of matches that are selected
 * @param {Array} matchesSelectedState
 * @returns {Number} - Number of selected elements
 */
export const getTotalSelectedMatches = matchesSelectedState =>
	matchesSelectedState.filter(match => match === true).length;

/**
 * Checks if all matches are selected
 * @param {Array} matchesSelectedState
 * @returns {Boolean} - Returns true if all matches are selected
 */
export const selectedAllMatches = matchesSelectedState => {
	return (
		getTotalSelectedMatches(matchesSelectedState) ===
		matchesSelectedState.length
	);
};

/**
 * Checks if the game is over - (When only one match is left)
 * @param {Array} matchesState
 * @return {Boolean} - Returns true if the game is over
 */
export const isGameOver = matchesState => {
	return matchesState.length <= 1;
};

/**
 * Selects the matches (false -> true) so that they can be removed later
 * @param {Number} number
 * @param {Array} arr
 * @returns {Array} - The new array
 */
export const selectNumberOfMatches = (number, arr) => {
	for (let i = 0; i < number; i++) {
		arr[i] = !arr[i];
	}
	return arr;
};

/**
 * Returns the max number of matches that can be selected
 * @param {Array} matchesSelectedState
 * @returns {Number} - max number that can be selected
 */
export const getMaxNumberToSelect = matchesSelectedState => {
	const length = matchesSelectedState.length;
	return length <= 3 ? length - 1 : 3;
};

/**
 * Gets the initial state
 * @param {Number} total number of entries
 * @returns {Array} - Array with initial entries
 */
export const getInitialState = (total = 13) => {
  let initialArray = []
  for (let i = 0; i < total; i++) {
    initialArray.push(false)
  }
  return initialArray;
}

/**
 * Returns the number of matches that the computer should remove
 * @param {Number} numberOfMatches
 * @returns {Number} - Numbers of matches to remove
 */
export const getBestMove = numberOfMatches => {
	if (numberOfMatches === 2) {
		return 1;
	}
	// If the remainder of numberOfMatches % 4 is 1 we return 3 so the next number is even again
	// If the remainder of numberOfMatches % 4 is 0 we return 2 so the next number is even again
	return !!numberOfMatches % 4 ? 3 : 2;
};
