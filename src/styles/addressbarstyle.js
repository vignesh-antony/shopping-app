import styled from "styled-components";

export const AddressbarStyle = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    border-right: 1px solid gainsboro;
`;

export const AddressStyle = styled.address`
    padding: 0.5em 0 1.5em 0;
    color: #404040;
    font-style: normal;
    font-size: 0.85em;
    display: flex;
    flex-direction: column;

    span {
        margin-top: 0.35em;
    }
`;
