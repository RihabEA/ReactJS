import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const divStyle = {
    display: "flex",
    width: "20%"
};

function TextBox({ onInsert }) {
    const [value, setValue] = useState(0);
    const handleChange = (e) => setValue(+e.target.value);
    const handleInsert = () => {
        onInsert(value);
    };

    return (
        <div style={divStyle}>
            <Form.Control onChange={handleChange} size="sm"  value={value} type="number"/>
            <Button  variant="outline-secondary" size="sm" onClick={handleInsert}>Insert</Button>
        </div>
    );
}

export default TextBox;