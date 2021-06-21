import styled from "styled-components";

export const MainbarStyle = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1em 2em;
`;

export const ItemListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 270px);
    gap: 1.5em;
    margin-top: 1em;
`;

export const ItemStyle = styled.div`
    padding: 1em;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 0 0 0 1px whitesmoke;
    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 0 20px 1px gainsboro;
    }
`;

export const ItemInfoStyle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 1em;
`;
export const ItemInfoText = styled.p`
    margin: 0.75em 0 1.25em 0;
    color: gray;
    font-size: 0.8em;
`;
export const ItemTitleStyle = styled.h4`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
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
    margin: auto 0 1em 0;
    color: #206717;
`;

export const ItemCountStyle = styled.div`
    display: grid;
    grid-template-columns: ${props => props.smaller ? '30px 1fr 30px' : '50px 1fr 50px'};;
    border: 1px solid gainsboro;
    border-radius: 5px;
    font-weight: bold;
    font-size: ${props => props.smaller ? '0.8em' : 'normal'};
`;

export const ItemCountNumber = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
    padding: 0 1em;
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
