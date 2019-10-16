import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Match from './Match';
import GameInformation from './GameInformation';
import {isLegalMove} from './utils';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

const GameContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background: #1b2d2a;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const MatchesContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 70%;
	width: 90%;

	@media (max-width: 900px) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		place-items: center;
	}
`;

// 13 Matches are available at the beginning of the game
const matchesSelectedArray = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false
];

const App = () => {
	const [matchesSelectedState, setMatchesState] = useState(matchesSelectedArray);
	const [userIsCurrentPlayer, setUserIsCurrentPlayer] = useState(true);

	const handleMatchesState = matchNumber => {
		setMatchesState(matchesSelectedState => {
			// Select and deselect the matches
			matchesSelectedState[matchNumber] = !matchesSelectedState[matchNumber];
			return [...matchesSelectedState];
		});
	};

	const handleFinishTurn = matchesSelectedState => {
		if (isLegalMove(matchesSelectedState)) {
			// Removes the matches that were selected from the game
			setMatchesState(matchesSelectedState => matchesSelectedState.filter(match => match === false));
			// Change Players
			setUserIsCurrentPlayer(userIsCurrentPlayer => !userIsCurrentPlayer);
		} else {
      alert('Please select more then 1 and less then 3 matches')
    }
	};

	return (
		<GameContainer>
			<GlobalStyle />
			<MatchesContainer>
				{matchesSelectedState.map((el, i) => (
					<Match
						visible={!el}
						key={i}
						matchNumber={i}
						onClick={handleMatchesState}
					/>
				))}
			</MatchesContainer>
			<GameInformation
				handleFinishTurn={handleFinishTurn}
				userIsCurrentPlayer={userIsCurrentPlayer}
				matchesSelectedState={matchesSelectedState}
			/>
		</GameContainer>
	);
};

export default App;
