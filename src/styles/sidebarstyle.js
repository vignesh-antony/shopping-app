import styled from "styled-components";

// base color #ebc249

export const SidebarStyle = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1em;
    border-right: 1px solid gainsboro;
`;

export const NoteStyle = styled.p`
    color: gray;
    font-size: 0.75em;
    margin: 0.5em 0;
    letter-spacing: 0.5px;
`;

export const CategoryListStyle = styled.div`
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1em;
`;

export const CategoryStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75em;
    border-radius: 0.75em;
    box-shadow: inset 0 0 0 1px gainsboro;
    transition: 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
        box-shadow: inset 0 0 0 1px gray;
        background-color: #f5f5f5;
    }
`;

export const CategoryContentStyle = styled.div`
    margin-right: 1em;

    h4 {
        font-size: 0.95em;
        color: #595959;
    }

    p {
        color: gray;
        font-size: 0.75em;
        margin-top: 0.3em;
    }
`;
