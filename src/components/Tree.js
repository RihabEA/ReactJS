import TextBox from "./Textbox";
import BinaryTreeExample from "./BinaryTree";
import {useState} from "react";

function Tree(){
    const [nodes, setNodes] = useState([]);
    const handleInsert = (value) => {
        setNodes([...nodes, value]);
    };

    return (
        <div className="App ms-4">
            <h1>Example of binary tree visualizer in react</h1>
            <TextBox onInsert={handleInsert}/>
            <BinaryTreeExample nodes={nodes}/>
        </div>
    )
}

export default Tree;