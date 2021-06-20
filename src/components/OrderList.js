import { OrderListStyle } from "../styles/orderstyle";
import OrderItem from "./OrderItem";

const OrderList = ({ item_list, orders, ...props }) => {
    return (
        <OrderListStyle>
            {orders &&
                orders.map((order, i) => {
                    const [categ_items] = item_list.filter(
                        (categ) => categ.categ_id === order.categ_id
                    );
                    const [item] =
                        categ_items && categ_items.items
                            ? categ_items.items.filter(
                                  (item) => item.item_id === order.item_id
                              )
                            : {};
                    return (
                        <OrderItem
                            key={`order-number-${i}`}
                            order={order}
                            item={item}
                            {...props}
                        ></OrderItem>
                    );
                })}
        </OrderListStyle>
    );
};

export default OrderList;
