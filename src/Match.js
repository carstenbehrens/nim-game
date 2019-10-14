import React from 'react';
import styled from 'styled-components';

const SingleMatchContainer = styled.div`
	height: 6rem;
	width: 4rem;
	cursor: pointer;
  opacity: ${props => props.visible ? '100' : '0'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MatchBottom = styled.div`
	height: 5rem;
	width: 1rem;
	background: #915535;
	cursor: pointer;
`;

const MatchTip = styled.div`
  height: 1rem;
  width: 1rem;
  background: red;
`

export default ({ visible, matchNumber, onClick }) => {
	return (
		<SingleMatchContainer visible={visible} onClick={() => onClick(matchNumber)}>
      <MatchTip />
			<MatchBottom /> 
		</SingleMatchContainer>
	);
};
