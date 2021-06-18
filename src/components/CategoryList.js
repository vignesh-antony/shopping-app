import Category from "./Category";
import { CategoryListStyle } from "../styles/sidebarstyle";

const CategoryList = ({ category_list }) => {
    return (
        <CategoryListStyle>
            {category_list &&
                category_list.map((category) => (
                    <Category key={category.id} {...category} />
                ))}
        </CategoryListStyle>
    );
};

export default CategoryList;
