import { CategoryStyle, CategoryContentStyle } from "../styles/sidebarstyle";

const Category = ({ categ_id, categ_name, desc, icon, onCategChange }) => {
    return (
        <CategoryStyle onClick={() => onCategChange(categ_id)}>
            <CategoryContentStyle>
                <h4>{categ_name}</h4>
                <p>{desc}</p>
            </CategoryContentStyle>
            {icon}
        </CategoryStyle>
    );
};

export default Category;
