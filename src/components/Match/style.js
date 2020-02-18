import styled from "styled-components";

export const MatchContainer = styled.div`
  height: 8rem;
  width: 4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border-radius: 3rem;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (min-width: 900px) {
    &:hover {
      box-shadow: 0px 3px 46px -17px rgba(0, 0, 0, 0.3);
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 0.3) 100%
      );
    }
  }

  @media (max-width: 600px) {
    height: 90%;
  }
`;

export const MatchStick = styled.div`
  height: 5rem;
  width: 0.6rem;
  background: rgb(224, 175, 76);
  background: linear-gradient(
    270deg,
    rgba(224, 175, 76, 1) 0%,
    rgba(224, 175, 76, 1) 50%,
    rgba(230, 186, 102, 1) 50%,
    rgba(237, 201, 136, 1) 100%
  );
  cursor: pointer;
  opacity: ${props => (props.visible ? "100" : "0")};
`;

export const MatchTip = styled.div`
  height: 1.4rem;
  width: 1rem;
  border-radius: 40%;
  background: rgb(89, 21, 12);
  background: linear-gradient(
    126deg,
    rgba(89, 21, 12, 1) 0%,
    rgba(238, 141, 101, 1) 0%,
    rgba(193, 104, 66, 1) 37%,
    rgba(213, 49, 28, 1) 39%,
    rgba(71, 19, 12, 1) 100%
  );
  opacity: ${props => (props.visible ? "100" : "0")};
`;
