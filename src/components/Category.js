import { CategoryStyle, CategoryContentStyle } from "../styles/sidebarstyle";

const Category = ({ categ_name, count, icon }) => {
    return (
        <CategoryStyle>
            {icon}
            <CategoryContentStyle>
                <h4>{categ_name}</h4>
                <p>Available items : {count}</p>
            </CategoryContentStyle>
        </CategoryStyle>
    );
};

export default Category;
