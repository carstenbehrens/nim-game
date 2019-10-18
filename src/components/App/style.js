import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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

export const GameContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background: #1b2d2a;
	display: flex;
	align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const MatchesContainer = styled.div`
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
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;