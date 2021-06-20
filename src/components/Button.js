import styled from "styled-components";

const ButtonStyle = styled.button`
    background-color: ${(props) => (props.secondary ? "white" : "darkblue")};
    color: ${(props) => (props.secondary ? "darkblue" : "white")};
    border: none;
    padding: 0.5em 1em;
    font-size: 0.95em;
    border-radius: 5px;
    font-weight: ${(props) => (props.important ? "bold" : "normal")};
    box-shadow: ${(props) =>
        props.secondary ? "inset 0 0 0 1px darkblue" : "none"};
    transition: 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.secondary ? "#edf0ff" : "blue")};
    }
`;

const Button = ({ name, important, secondary, onButtonClick }) => {
    return (
        <ButtonStyle
            important={important}
            secondary={secondary}
            onClick={onButtonClick}
        >
            {name}
        </ButtonStyle>
    );
};

export default Button;
