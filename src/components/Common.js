import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { add } from "../actions";
import { v4 as uuidv4 } from "uuid";

function Common(props) {
  const [showTextBox, setShowTextBox] = useState(false);
  const [text, setText] = useState([]);
  const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   dispatch(onDelete(id));
  // };

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

  return (
    <div>
      <ul>
        <li>
          {props.text}
          <Button onClick={handleAdd}>+</Button>
          <Button onClick={hidetextbox}>-</Button>
          {/* <Button onClick={() => handleDelete(category.id)}>-</Button> */}
        </li>
      </ul>
      {showTextBox ? (
        <div>
          <input type="text" onChange={textAdd} />
          <Button onClick={inputAdd}>+</Button>
          <Button onClick={hidetextbox}>-</Button>
        </div>
      ) : null}
      {props.traverseNode}
    </div>
  );
}

export default Common;
