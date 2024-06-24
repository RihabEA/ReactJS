import React, {useState} from 'react';

function Span(next) {
    return (
        <>
            <span className=" border-2 border-sky-500"> {"Next"}</span>
            {next && " -> "}
        </>
    );
}

function Node({value, next}) {
    return (
        <>
            <li className="mb-5 list">
                <span className="border-2 border-sky-500"> {"Data: "}{value} </span>
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
                <button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => addNode(Math.random())}>Add
                    Node</button><br/>
            </div>
        </>

    );
}

export default LinkedList;