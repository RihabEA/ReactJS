import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Node({ value, next }) {
    return (
        <li>
            {value}<br/>
            {next && <Node value={next.value} next={next.next} />}
        </li>
    );
}

function LinkedList() {
    const [head, setHead] = useState(null);
    const [tail, setTail] = useState(null);

    function addNode(value) {
        const node = { value, next: null };
        if (!head) {
            setHead(node);
            setTail(node);
        } else {
            tail.next = node; //next of the previous tail is the new node
            setTail(node); //tail equal to new node
        }
    }

    return (
        <div className="ml-5">
            <ul>
                {head && <Node value={head.value} next={head.next} />}
            </ul>
            <Button className="ms-4"  variant="outline-primary" size="md" onClick={() => addNode(Math.random())}>Add Node</Button><br/>
        </div>
    );
}

export default LinkedList;