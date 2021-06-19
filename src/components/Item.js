import {
    ItemStyle,
    ItemInfoStyle,
    ItemPrizeStyle,
    ItemTitleStyle,
    ItemStockStyle,
    ItemCountStyle,
    ItemIncrease,
    ItemDecrease,
    ItemInfoText,
    ItemCountNumber,
} from "../styles/mainbarstyle";

import Icon from "./Icon";
import Button from "./Button";

const Item = ({
    item_id,
    item_name,
    item_desc,
    prize,
    stock,
    image_url,
    order,
    onAddItem,
    onRemoveItem,
}) => {
    const image = require(`../assets/img/${image_url}`).default;

    const handleOrderItem = () => {
        stock > order.count && onAddItem(item_id);
    };

    return (
        <ItemStyle>
            <Icon width="100%" height="15em" size="14.5em" image={image} />
            <ItemInfoStyle>
                <ItemTitleStyle>
                    {item_name}
                    <ItemStockStyle>{stock}</ItemStockStyle>
                </ItemTitleStyle>
                <ItemInfoText>{item_desc}</ItemInfoText>
                <ItemPrizeStyle>₹ {prize} /-</ItemPrizeStyle>
                {order && order.count > 0 ? (
                    <ItemCountStyle>
                        <ItemDecrease onClick={() => onRemoveItem(item_id)}>
                            -
                        </ItemDecrease>
                        <ItemCountNumber>{order.count}</ItemCountNumber>
                        <ItemIncrease onClick={handleOrderItem}>+</ItemIncrease>
                    </ItemCountStyle>
                ) : (
                    <Button
                        name="Add to Cart"
                        important
                        onButtonClick={() => onAddItem(item_id)}
                    />
                )}
            </ItemInfoStyle>
        </ItemStyle>
    );
};

export default Item;
