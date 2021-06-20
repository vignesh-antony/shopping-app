import styled from "styled-components";

import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";

const Homestyle = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 420px 1fr;
    grid-template-rows: 100%;
`;

const Home = ({
    item_list,
    onCategChange,
    categ,
    orders,
    onAddItem,
    onRemoveItem,
}) => {
    return (
        <Homestyle>
            <Sidebar item_list={item_list} onCategChange={onCategChange} />
            <Mainbar
                {...categ}
                orders={orders}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
            />
        </Homestyle>
    );
};

export default Home;
