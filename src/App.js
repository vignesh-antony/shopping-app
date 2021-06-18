import "./App.css";
import classes from "./styles/app.module.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
    return (
        <div className={classes.container}>
            <Navbar />
            <Home />
        </div>
    );
}

export default App;
