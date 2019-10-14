import React from 'react';
import styled from 'styled-components';

const GameInformationContainer = styled.div`
  height: 30%;
  width: 100%;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FinishTurn = styled.button`
  height: 4rem;
  width: 8rem;
  color: white;
  background: none;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  margin-right: 3rem;
`

export default ({ userIsCurrentPlayer }) => {
	return (
		<GameInformationContainer>
      <FinishTurn>Finish Turn</FinishTurn>
      Current Player: {userIsCurrentPlayer ? 'User' : 'Computer'}
		</GameInformationContainer>
	);
};
