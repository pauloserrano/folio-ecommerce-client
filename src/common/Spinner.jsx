import styled from "styled-components"

const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5em auto;
  width: 50%;
  height: 50%;

  &:after {
    content: "";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #161616aa;
    border-color: #161616aa transparent #161616aa transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner