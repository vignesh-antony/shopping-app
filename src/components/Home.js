import { useState } from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";

import { RiComputerLine } from "react-icons/ri";
import { MdKitchen } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

const Homestyle = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 420px 1fr;
    grid-template-rows: 100%;
`;

const item_list = [
    {
        categ_id: 1,
        categ_name: "Computer Accessories",
        desc: "Laptop, Monitor, Mouse, Keyboard",
        icon: <RiComputerLine size={30} />,
        items: [
            {
                item_id: 145,
                item_name: "Samsung LED Monitor",
                item_categ: "Monitor",
                item_desc:
                    "22 inch - IPS panel display - 120Hz refresh rate - 1 year warranty",
                prize: "14,999",
                stock: 2,
                image_url: "computer/monitor.jpg",
            },
        ],
    },
    {
        categ_id: 2,
        categ_name: "Home Appliances",
        desc: "Fridge, Washing Machine, Air Conditioner",
        icon: <MdKitchen size={30} />,
    },
    {
        categ_id: 3,
        categ_name: "Groceries",
        desc: "Vegetables, Fruits, Dairy Products",
        icon: <IoFastFoodOutline size={30} />,
    },
];

const Home = ({ onOrderChange }) => {
    const [categ, setCateg] = useState({});
    const [orders, setOrders] = useState([]);

    const getTotalOrders = (user_orders) =>
        user_orders.reduce((total, order) => total + order.count, 0);

    const handleCategChange = (categ_id) => {
        const selected_categ = item_list.find(
            (item) => item.categ_id === categ_id
        );
        setCateg(selected_categ || {});
    };

    const handleAddItem = (categ_id, item_id) => {
        const user_orders = [...orders];

        // Check if order is already placed
        const order_index = user_orders.findIndex(
            (order) => order.categ_id === categ_id && order.item_id === item_id
        );

        if (order_index !== -1) user_orders[order_index].count++;
        else
            user_orders.push({
                item_id: item_id,
                categ_id: categ_id,
                count: 1,
            });

        setOrders(user_orders);
        onOrderChange(getTotalOrders(user_orders));
    };

    const handleRemoveItem = (categ_id, item_id) => {
        const user_orders = [...orders];

        // Check if order is already placed
        const order_index = user_orders.findIndex(
            (order) => order.categ_id === categ_id && order.item_id === item_id
        );

        user_orders[order_index].count--;
        if (user_orders[order_index].count === 0)
            user_orders.splice(order_index, 1);

        setOrders(user_orders);
        onOrderChange(getTotalOrders(user_orders));
    };

    return (
        <Homestyle>
            <Sidebar item_list={item_list} onCategChange={handleCategChange} />
            <Mainbar
                {...categ}
                orders={orders}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
            />
        </Homestyle>
    );
};

export default Home;
