import styled from "styled-components";

export const Navstyle = styled.header`
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
        a {
            color: black;
            padding: 0.25em 1em;
            font-size: 0.95em;
        }
    }
`;
