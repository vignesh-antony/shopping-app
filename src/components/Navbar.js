import { Navstyle } from "../styles/navstyle";
import Icon from "./Icon";
import logo from "../assets/img/cart.png";

const Navbar = () => {
    return (
        <Navstyle>
            <h2>
                <Icon width="2em" height="2em" size="1.35em" image={logo} />
                <span>E-Shopping</span>
            </h2>
            <nav>
                <a href=".">Home</a>
                <a href=".">Orders</a>
            </nav>
        </Navstyle>
    );
};
export default Navbar;
