import React from 'react';
import { HudContainer, FinishTurn} from './style'

export default ({ userIsCurrentPlayer, handleFinishTurn, matches }) => {
	return (
		<HudContainer>
			<FinishTurn onClick={() => handleFinishTurn(matches)}>
				Finish Turn
			</FinishTurn>
			<p>Player: </p>
			{userIsCurrentPlayer ? 'User' : 'Computer'}
		</HudContainer>
	);
};
