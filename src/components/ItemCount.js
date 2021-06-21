import {
    ItemCountStyle,
    ItemIncrease,
    ItemDecrease,
    ItemCountNumber,
} from "../styles/mainbarstyle";
const ItemCount = ({ item_id, stock, order, smaller, onAddItem, onRemoveItem }) => {
    if (!order) return <></>;

    const handleOrderItem = () => {
        stock > order.count && onAddItem(item_id);
    };

    return (
        <ItemCountStyle smaller={smaller}>
            <ItemDecrease onClick={() => onRemoveItem(item_id)}>-</ItemDecrease>
            <ItemCountNumber>{order.count}</ItemCountNumber>
            <ItemIncrease onClick={handleOrderItem}>+</ItemIncrease>
        </ItemCountStyle>
    );
};

export default ItemCount;
