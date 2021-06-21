import {
    ItemStyle,
    ItemInfoStyle,
    ItemPrizeStyle,
    ItemTitleStyle,
    ItemStockStyle,
    ItemInfoText,
} from "../styles/mainbarstyle";

import Icon from "./Icon";
import Button from "./Button";
import ItemCount from "./ItemCount";

const Item = ({ item, order, onAddItem, onRemoveItem }) => {
    let { item_id, item_name, item_desc, prize, stock, image_url } = item;
    const image = require(`../assets/img/${image_url}`).default;
    return (
        <ItemStyle>
            <Icon width="100%" height="15em" size="14.5em" image={image} />
            <ItemInfoStyle>
                <ItemTitleStyle>
                    {item_name}
                    <ItemStockStyle>{stock}</ItemStockStyle>
                </ItemTitleStyle>
                <ItemInfoText>{item_desc}</ItemInfoText>
                <ItemPrizeStyle>
                    ₹ {(+prize).toLocaleString()} /-
                </ItemPrizeStyle>
                {order && order.count > 0 ? (
                    <ItemCount
                        {...item}
                        order={order}
                        onAddItem={onAddItem}
                        onRemoveItem={onRemoveItem}
                    />
                ) : (
                    <Button
                        name="Add to Cart"
                        onButtonClick={() => onAddItem(item_id)}
                    />
                )}
            </ItemInfoStyle>
        </ItemStyle>
    );
};

export default Item;
