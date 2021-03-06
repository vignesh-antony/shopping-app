import CategoryList from "./CategoryList";
import { SidebarStyle, NoteStyle } from "../styles/sidebarstyle";

const Sidebar = ({ item_list, onCategChange }) => {
    return (
        <SidebarStyle>
            <h5>CATEGORIES</h5>
            <NoteStyle>
                You can filter out the categories shown below.
            </NoteStyle>
            <CategoryList
                category_list={item_list}
                onCategChange={onCategChange}
            />
        </SidebarStyle>
    );
};

export default Sidebar;
