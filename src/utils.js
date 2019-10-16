import { length } from 'ramda';

export const isLegalMove = matchesSelectedState => {
  const totalSelectedMatches = length(
    matchesSelectedState.filter(match => match === true)
  );
  return totalSelectedMatches > 0 && totalSelectedMatches < 4;
}