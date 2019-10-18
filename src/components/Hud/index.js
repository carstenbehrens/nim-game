import React from 'react';
import { HudContainer, FinishTurn} from './style'

export default ({ userIsCurrentPlayer, handleFinishTurn, matchesSelectedState }) => {
	return (
		<HudContainer>
			<FinishTurn onClick={() => handleFinishTurn(matchesSelectedState)}>
				Finish Turn
			</FinishTurn>
			<p>Player: </p>
			{userIsCurrentPlayer ? 'User' : 'Computer'}
		</HudContainer>
	);
};
