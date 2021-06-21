import { ItemInfoText, ItemTitleStyle } from "../styles/mainbarstyle";
import {
    OrderItemStyle,
    OrderItemInfo,
    OrderPrizeStyle,
    OrderCountWrapper,
} from "../styles/orderstyle";

import { RiDeleteBin6Line } from "react-icons/ri";

import Icon from "./Icon";
import ItemCount from "./ItemCount";

const OrderItem = ({ order, item, onAddItem, onRemoveItem }) => {
    const image = require(`../assets/img/${item.image_url}`).default;

    return (
        <OrderItemStyle>
            <Icon width="6em" height="6em" size="5.5em" image={image} />
            <OrderItemInfo>
                <ItemTitleStyle>
                    {item.item_name}{" "}
                    <RiDeleteBin6Line
                        style={{ cursor: "pointer", flexShrink: "0" }}
                    />{" "}
                </ItemTitleStyle>
                <ItemInfoText>{item.item_desc}</ItemInfoText>
                <OrderCountWrapper>
                    <ItemCount
                        smaller
                        order={order}
                        {...item}
                        onAddItem={(item_id) =>
                            onAddItem(order.categ_id, item_id)
                        }
                        onRemoveItem={(item_id) =>
                            onRemoveItem(order.categ_id, item_id)
                        }
                    />
                    <OrderPrizeStyle>
                        ₹ {(order.count * item.prize).toLocaleString()}
                    </OrderPrizeStyle>
                </OrderCountWrapper>
            </OrderItemInfo>
        </OrderItemStyle>
    );
};

export default OrderItem;
