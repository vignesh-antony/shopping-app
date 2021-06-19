import Category from "./Category";
import { CategoryListStyle } from "../styles/sidebarstyle";

const CategoryList = ({ category_list, onCategChange }) => {
    return (
        <CategoryListStyle>
            {category_list &&
                category_list.map((category, i) => (
                    <Category
                        key={`category-${i}`}
                        {...category}
                        onCategChange={onCategChange}
                    />
                ))}
        </CategoryListStyle>
    );
};

export default CategoryList;
