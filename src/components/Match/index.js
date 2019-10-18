import React from 'react';
import styled from 'styled-components';

const MatchContainer = styled.div`
	height: 8rem;
	width: 4rem;
	cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #243d39;

  @media (min-width: 900px) {
    &:hover {
      background: #335751;
    }
  }
  
  @media (max-width: 600px) {
    height: 90%;
  }
`;

const MatchBottom = styled.div`
	height: 5rem;
	width: 1rem;
	background: #915535;
  cursor: pointer;
  opacity: ${props => props.visible ? '100' : '0'};
`;

const MatchTip = styled.div`
  height: 1rem;
  width: 1rem;
  background: red;
  opacity: ${props => props.visible ? '100' : '0'};
`


export default ({ visible, matchNumber, onClick }) => {
	return (
		<MatchContainer onClick={() => onClick(matchNumber)}>
      <MatchTip visible={visible} />
			<MatchBottom visible={visible} /> 
    </MatchContainer>
	);
};
