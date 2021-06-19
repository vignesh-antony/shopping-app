import styled from "styled-components";

export const NavStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75em 1em;
    box-shadow: 0 0 10px 0 gainsboro;

    h2 {
        font-size: 1.25em;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;

        span {
            margin-left: 0.5em;
        }
    }
    nav {
        display: flex;
        align-items: center;
        a {
            color: black;
            padding: 0.25em 1em;
            font-size: 0.95em;
        }
    }
`;

export const NavIconStyle = styled.div`
    padding: 0.25em 0.5em;
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        font-size: 0.7em;
        font-weight: bold;
        border-radius: 50%;
        color: white;
        background-color: darkblue;
        margin-left: 0.75em;
    }
`;
