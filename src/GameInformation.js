import React from 'react';
import styled from 'styled-components';

const GameInformationContainer = styled.div`
  height: 20%;
  width: 100%;
  color: white;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ({ userIsCurrentPlayer }) => {
	return (
		<GameInformationContainer>
      Current Player: {userIsCurrentPlayer ? 'User' : 'Computer'}
		</GameInformationContainer>
	);
};
