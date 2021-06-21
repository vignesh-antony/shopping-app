import styled from "styled-components";

export const OrderStyle = styled.div`
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
`;

export const OrderListStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
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
    flex: 1;
    margin-left: 1em;
    display: flex;
    flex-direction: column;
`;

export const OrderCountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const OrderPrizeStyle = styled.p`
    font-size: 0.9em;
    font-weight: bold;
    color: #206717;
    margin-left: auto;
`;
