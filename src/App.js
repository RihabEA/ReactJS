import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import LinkedList from "./components/LinkedList";
import Tree from "./components/Tree";
import ReactQuery from "./components/ReactQuery";
import ZustandExample from "./components/ZustandExample";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/linkedList" element={<LinkedList />} />
                <Route path="/tree" element={<Tree />} />
                <Route path="/reactQuery" element={<ReactQuery />} />
                <Route path="/zustandExample" element={<ZustandExample />} />
                <Route path="/table" element={<Table />} />
            </Routes>
            </>
    );
}

export default App;
