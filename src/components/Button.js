import styled from "styled-components";

const ButtonStyle = styled.button`
    background-color: #ebc249;
    border: none;
    padding: 0.5em 1em;
    font-size: 0.95em;
    border-radius: 5px;
    font-weight: ${(props) => (props.important ? "bold" : "normal")};
    transition: 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #e0aa1f;
        box-shadow: inset 0 0 0 1px #6e530e;
    }
`;

const Button = ({ name, important, onButtonClick }) => {
    return (
        <ButtonStyle important={important} onClick={onButtonClick}>
            {name}
        </ButtonStyle>
    );
};

export default Button;
