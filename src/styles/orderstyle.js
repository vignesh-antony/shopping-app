import styled from "styled-components";

export const OrderStyle = styled.div`
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
`;

export const OrderListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    margin-top: 1em;
`;

export const OrderItemStyle = styled.div`
    display: flex;
    padding: 1em;
    border-radius: 0.5em;
    box-shadow: inset 0 0 0 1px #f0f0f0;
`;

export const OrderItemInfo = styled.div`
    margin-left: 1em;
    display: flex;
    flex-direction: column;
`;
