import styled from "styled-components";

import Addressbar from "./Addressbar";
import OrderSummary from "./OrderSummary";

const OrdersStyle = styled.section`
    flex: 1;
    display: grid;
    grid-template-columns: 350px 1fr 350px;
    grid-template-rows: 100%;
`;

const Orders = (props) => {
    return (
        <OrdersStyle>
            <Addressbar></Addressbar>
            <OrderSummary {...props}></OrderSummary>
        </OrdersStyle>
    );
};

export default Orders;
