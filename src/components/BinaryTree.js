import React, {useRef} from "react";
import {BinarySearchTreeNode, drawBinaryTree, VisualizationType} from "binary-tree-visualizer";

function BinaryTreeExample({nodes}) {
    //using canvas to draw graphics
    const ref = useRef(null); //return an object 'current'

    if (ref.current && nodes.length > 0) {
        const [firstEl] = nodes;
        const root = new BinarySearchTreeNode(firstEl);
        nodes.forEach((num) => root.insert(num));

        drawBinaryTree(root, ref.current, {
            type: VisualizationType.PRETTY,
            maxWidth: window.innerWidth,
            maxHeight: 0
        });
    }

    return (
        <div>
            <canvas ref={ref}/>
        </div>
    );
}

export default BinaryTreeExample;