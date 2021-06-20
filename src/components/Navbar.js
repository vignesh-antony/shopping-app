import { NavStyle, NavIconStyle } from "../styles/navstyle";
import Icon from "./Icon";

import { Link } from "react-router-dom";

import logo from "../assets/img/cart.png";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ count }) => {
    return (
        <NavStyle>
            <h2>
                <Icon width="2em" height="2em" size="1.35em" image={logo} />
                <span>E-Shopping</span>
            </h2>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/orders">
                    <li>Orders</li>
                </Link>
                <Link to="/orders">
                    <NavIconStyle>
                        <FiShoppingCart size={20} />
                        {count > 0 && <span>{count}</span>}
                    </NavIconStyle>
                </Link>
            </ul>
        </NavStyle>
    );
};
export default Navbar;
