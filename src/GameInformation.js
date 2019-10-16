import React from 'react';
import styled from 'styled-components';

const GameInformationContainer = styled.div`
	height: 30%;
	width: 100%;
	color: white;
	font-size: 2rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
`;

const FinishTurn = styled.button`
	height: 4rem;
	width: 8rem;
	color: white;
	background: none;
	font-weight: bold;
	cursor: pointer;
	text-transform: uppercase;
`;

export default ({ userIsCurrentPlayer, handleFinishTurn, matchesSelectedState }) => {
	return (
		<GameInformationContainer>
			<FinishTurn onClick={() => handleFinishTurn(matchesSelectedState)}>
				Finish Turn
			</FinishTurn>
			<p>Player: </p>
			{userIsCurrentPlayer ? 'User' : 'Computer'}
		</GameInformationContainer>
	);
};
