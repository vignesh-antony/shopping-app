import styled from "styled-components";

export const MainbarStyle = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1em 2em;
`;

export const ItemListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 270px);
    gap: 1em;
    margin-top: 1em;
`;

export const ItemStyle = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    border-radius: 1em;
    box-shadow: inset 0 0 0 1px gainsboro;
`;

export const ItemInfoStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
`;
export const ItemInfoText = styled.p`
    margin-top: 0.75em;
    color: gray;
    font-size: 0.8em;
`;
export const ItemTitleStyle = styled.h4`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ItemStockStyle = styled.div`
    flex-shrink: 0;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    font-size: 0.75em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    box-shadow: inset 0 0 0 1px gainsboro;
    margin-left: 0.5em;
`;

export const ItemPrizeStyle = styled.div`
    font-size: 1.15em;
    font-weight: bold;
    margin: 1em 0;
    color: #206717;
`;

export const ItemCountStyle = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    border: 1px solid gainsboro;
    border-radius: 5px;
    font-weight: bold;
`;

export const ItemCountNumber = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
`;

export const ItemIncrease = styled.span`
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    padding: 0.25em;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f2ffe8;
    color: seagreen;
`;

export const ItemDecrease = styled(ItemIncrease)`
    color: red;
    background-color: #ffe8e8;
`;
