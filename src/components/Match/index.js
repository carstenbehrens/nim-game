import React from 'react';
import { MatchContainer, MatchTip, MatchStick } from './style';

export default ({ visible, number, onClick }) => {
	return (
		<MatchContainer onClick={() => onClick(number)}>
			<MatchTip visible={visible} />
			<MatchStick visible={visible} />
		</MatchContainer>
	);
};
