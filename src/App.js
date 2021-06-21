import "./App.css";
import classes from "./styles/app.module.scss";

import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Footer from "./components/Footer";

import { RiComputerLine } from "react-icons/ri";
import { MdKitchen } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

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
                prize: "14999",
                stock: 2,
                image_url: "computer/monitor.jpg",
            },
            {
                item_id: 178,
                item_name: "KuWfi Computer Mouse Bluetooth",
                item_categ: "Mouse",
                item_desc: "Bluetooth 3.0 - High Battery Life",
                prize: "2450",
                stock: 1,
                image_url: "computer/kuwfi-mouse.jpeg",
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
const App = () => {
    const [count, setCount] = useState(0);
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
        setCount(getTotalOrders(user_orders));
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
        setCount(getTotalOrders(user_orders));
    };
    return (
        <div className={classes.container}>
            <Router>
                <Navbar count={count} />
                <Switch>
                    <Route exact path="/">
                        <Home
                            item_list={item_list}
                            orders={orders}
                            categ={categ}
                            onCategChange={handleCategChange}
                            onAddItem={handleAddItem}
                            onRemoveItem={handleRemoveItem}
                        />
                    </Route>
                    <Route path="/orders">
                        <Orders
                            item_list={item_list}
                            orders={orders}
                            onAddItem={handleAddItem}
                            onRemoveItem={handleRemoveItem}
                        />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
};

export default App;
