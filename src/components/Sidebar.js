import CategoryList from "./CategoryList";
import { SidebarStyle, NoteStyle } from "../styles/sidebarstyle";

import { RiComputerLine } from "react-icons/ri";
import { MdKitchen } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

const category_list = [
    {
        id: 1,
        categ_name: "Computer Accesories",
        count: 45,
        icon: <RiComputerLine size={30} />,
    },
    {
        id: 2,
        categ_name: "Kitchen Items",
        count: 12,
        icon: <MdKitchen size={30} />,
    },
    {
        id: 3,
        categ_name: "Groceries",
        count: 23,
        icon: <IoFastFoodOutline size={30} />,
    },
];

const Sidebar = () => {
    return (
        <SidebarStyle>
            <h3>Categories</h3>
            <NoteStyle>
                You can filter out the categories shown below.
            </NoteStyle>
            <CategoryList category_list={category_list} />
        </SidebarStyle>
    );
};

export default Sidebar;
