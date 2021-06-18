import styled from "styled-components";

import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";

const Homestyle = styled.div`
    display: grid;
    grid-template-columns: 420px 1fr;
`;

const Home = () => {
    return (
        <Homestyle>
            <Sidebar />
            <Mainbar />
        </Homestyle>
    );
};

export default Home;
