import { MainbarStyle } from "../styles/mainbarstyle";
import { NoteStyle } from "../styles/sidebarstyle";
import ItemList from "./ItemList";

const Mainbar = ({
    categ_id,
    categ_name,
    desc,
    items,
    onAddItem,
    onRemoveItem,
    orders,
}) => {
    if (!categ_name) return <div></div>;

    // Filter out specific category orders
    const categ_orders = orders.filter((order) => order.categ_id === categ_id);

    return (
        <MainbarStyle>
            <h3>{categ_name}</h3>
            <NoteStyle>
                This category consists of items like {desc} etc.
            </NoteStyle>
            <ItemList
                items={items}
                categ_orders={categ_orders}
                onAddItem={(item_id) => onAddItem(categ_id, item_id)}
                onRemoveItem={(item_id) => onRemoveItem(categ_id, item_id)}
            />
        </MainbarStyle>
    );
};

export default Mainbar;
