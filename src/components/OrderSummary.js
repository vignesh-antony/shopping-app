import { OrderStyle } from "../styles/orderstyle";
import { NoteStyle } from "../styles/sidebarstyle";

import OrderList from "./OrderList";

const OrderSummary = (props) => {
    return (
        <OrderStyle>
            <h3>Orders Placed</h3>
            <NoteStyle>You can manage your orders and checkout.</NoteStyle>
            <OrderList {...props} />
        </OrderStyle>
    );
};

export default OrderSummary;
