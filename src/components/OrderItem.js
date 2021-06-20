import { ItemInfoText } from "../styles/mainbarstyle";
import { OrderItemStyle, OrderItemInfo } from "../styles/orderstyle";

import Icon from "./Icon";
import ItemCount from "./ItemCount";

const OrderItem = ({ order, item, onAddItem, onRemoveItem }) => {
    const image = require(`../assets/img/${item.image_url}`).default;

    return (
        <OrderItemStyle>
            <Icon width="6em" height="6em" size="5.5em" image={image} />
            <OrderItemInfo>
                <h4>{item.item_name}</h4>
                <ItemInfoText>{item.item_desc}</ItemInfoText>
                <ItemCount
                    order={order}
                    {...item}
                    onAddItem={(item_id) => onAddItem(order.categ_id, item_id)}
                    onRemoveItem={(item_id) =>
                        onRemoveItem(order.categ_id, item_id)
                    }
                />
            </OrderItemInfo>
        </OrderItemStyle>
    );
};

export default OrderItem;
