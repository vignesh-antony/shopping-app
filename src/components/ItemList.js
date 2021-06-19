import { ItemListStyle } from "../styles/mainbarstyle";
import Item from "./Item";

const ItemList = ({ items, onAddItem, onRemoveItem, categ_orders }) => {
    if (!items || !items.length) return <div></div>;
    return (
        <ItemListStyle>
            {items.map((item, i) => {
                // Find if Item has been already purchased
                const order_already = categ_orders.find(
                    (order) => order.item_id === item.item_id
                );
                return (
                    <Item
                        key={`item-${i}`}
                        {...item}
                        onAddItem={onAddItem}
                        onRemoveItem={onRemoveItem}
                        order={order_already}
                    />
                );
            })}
        </ItemListStyle>
    );
};

export default ItemList;
