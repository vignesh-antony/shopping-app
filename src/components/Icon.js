import styled from "styled-components";

const Iconstyle = styled.div`
    width: ${(props) => props.width || "1em"};
    height: ${(props) => props.height || "1em"};
    background-size: ${(props) => props.size || "1em"};
    background-image: url(${(props) => props.image || ""});
    background-repeat: no-repeat;
    background-position: center;
    display: block;
`;

const Icon = (props) => {
    return <Iconstyle {...props} />;
};

export default Icon;
