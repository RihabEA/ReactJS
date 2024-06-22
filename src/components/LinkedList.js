import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function Span(next) {
    return (
        <>
            <span className="vl solid"> {"Next"}</span>
            {next && " -> "}
        </>
    );
}

function Node({value, next}) {
    return (
        <>
            <li className="mb-5 list">
                <span className="solid"> {"Data: "}{value} </span>
                {next !== null && <Span/>}
            </li>
            {next && <Node value={next.value} next={next.next}/>}
        </>
    );
}

function LinkedList() {
    const [head, setHead] = useState(null);
    const [tail, setTail] = useState(null);

    function addNode(value) {
        const node = {value, next: null};
        if (!head) {
            setHead(node);
            setTail(node);
        } else {
            tail.next = node; //next of the previous tail is the new node
            setTail(node); //tail equal to new node
        }
    }

    return (
        <>
            <div className="ml-5 mt-5">
                <ul>
                    {head && <Node value={head.value} next={head.next}/>}
                </ul>
            </div>
            <div>
                <Button className="ms-4 mt-5" variant="outline-primary" size="md"
                        onClick={() => addNode(Math.random())}>Add
                    Node</Button><br/>
            </div>
        </>

    );
}

export default LinkedList;