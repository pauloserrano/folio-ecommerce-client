import styled from "styled-components";

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: min(100%, 500px);

    input, button{
        padding: 1em;
        min-height: 55px;
        margin-bottom: 1.5em;
        font-size: 16px;
        font-weight: bold;
        font-family: inherit;
        border: 1px solid #171717;
        border-radius: 5px;
        color: #171717;
        text-transform: uppercase;
    }

    input:last-of-type{
        margin-bottom: 2.5em;
    }

    input::placeholder{
        color: #696969;
    }

    input:focus{
        outline: none;
    }

    button{
        font-size: 14px;
        background-color: #171717;
        color: #fff;
        cursor: pointer;
    }
`

export default FormWrapper