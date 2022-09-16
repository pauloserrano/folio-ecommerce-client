import styled from "styled-components";

const LoginWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

    h1{
        font-family: inherit;
        font-size: 2rem;
        font-weight: 800;
        line-height: 5em;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    a{
        font-size: 0.8em;
        color: #303030;
        margin-bottom: 1em;
        text-transform: uppercase;
    }
`

export default LoginWrapper