import "./App.css";
import classes from "./styles/app.module.scss";

import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className={classes.container}>
            <Navbar count={count} />
            <Home onOrderChange={(count) => setCount(count)} />
            <Footer />
        </div>
    );
}

export default App;
