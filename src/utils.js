import { length } from 'ramda';

export const isLegalMove = matchesState => {
  const totalSelectedMatches = length(
    matchesState.filter(match => match === true)
  );
  return totalSelectedMatches > 0 && totalSelectedMatches < 4;
}