import styled from "styled-components"

export const AboutWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: var(--postColor);
  animation: blink 1s steps(1, end) infinite;
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
      color: red;
    }
    100% {
      opacity: 1;
    }
  }
`
