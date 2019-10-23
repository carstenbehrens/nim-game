import React from 'react';
import { HudContainer, FinishTurn} from './style'

export default ({ isPlayer, handleFinishTurn, matches }) => {
	return (
		<HudContainer>
			<FinishTurn onClick={() => handleFinishTurn(matches)}>
				Finish Turn
			</FinishTurn>
			<p>Player: </p>
			{isPlayer ? 'User' : 'Computer'}
		</HudContainer>
	);
};
