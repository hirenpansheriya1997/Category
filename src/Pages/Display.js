import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../actions";
import Common from "../components/Common";
import { v4 as uuidv4 } from "uuid";
// import category from "../reducers/category";

function Display() {
  const [showTextBox, setShowTextBox] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const handleAdd = () => {
    setShowTextBox(true);
  };

  const textAdd = (e) => {
    setText(e.target.value);
  };

  const inputAdd = (id) => {
    if (text === "") {
      alert("please add the value");
    } else {
      dispatch(add({ id: uuidv4(), node: text, parentId: id, children: [] }));
      hidetextbox();
    }
  };

  const hidetextbox = () => {
    setShowTextBox(false);
    setText("");
  };

  // const childrenData = (categories, parent) => {
  //   for (var i in categories) {
  //     if (categories[i].parentId === parent) {
  //       var children = childrenData(categories, categories[i].id);
  //       if (children.length > 0) {
  //         categories[i].children = children;
  //       }
  //       return (
  //         <div>
  //           {children.map((children) => (
  //             <div key={children.id}>
  //               {children.length > 0 ? children.text : null}
  //             </div>
  //           ))}
  //         </div>
  //       );
  //     }
  //   }

  const traverseNode = (node) => {
    for (var i in categories) {
      if (categories[i].parentId === node) {
        var children = traverseNode(categories, categories[i].id);
        if (children.length > 0) {
          <li>categories[i].children = children;</li>;
        } else {
          categories.map((category) => category.text);
        }
      }
    }
    return (
      <li key={node.id}>
        {node.node}
        {node.children
          ? node.children.map((childNode) => <ul>{traverseNode(childNode)}</ul>)
          : null}
      </li>
    );
  };

  return (
    <div>
      <label>Category</label>
      <Button onClick={handleAdd}>+</Button>
      <br />
      {showTextBox ? (
        <div>
          <input type="text" onChange={textAdd} />
          <Button onClick={inputAdd}>+</Button>
          <Button onClick={hidetextbox}>-</Button>
        </div>
      ) : null}

      {categories.map((category) => (
        <div key={category.id}>
          {category.id === 0 ? null : (
            <div>
              <Common text={category.node} traverseNode={traverseNode} />
            </div>
          )}
        </div>
      ))}
      <ul>{categories.map((node) => traverseNode(node))}</ul>
    </div>
  );
}

export default Display;
