import React, { useState, useEffect } from "react";
import "./style.css";

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  const addItems = () => {
    if (!inputdata) {
      alert("Please Enter Data");
    } else if (inputdata && toggleButton) {
      setItems(
        items.map((curElem) => {
          if (curElem.id === isEditItem) {
            return { ...curElem, name: inputdata };
          }
          return curElem;
        })
      );

      setInputData("");
      setIsEditItem(null);
      setToggleButton(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  // edit list items

  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
      return curElem.id === index;
    });

    setInputData(item_todo_edited.name);
    setIsEditItem(index);
    setToggleButton(true);
  };

  // delete button code

  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // remove all
  const removeAll = () => {
    setItems([]);
  };

  // for storing data in local storage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleButton ? (
              <i className="far fa-edit" onClick={addItems}></i>
            ) : (
              <i className="fa fa-plus" onClick={addItems}></i>
            )}

            <div>
              {/* show our items */}
              <div className="shoeItems">
                {items.map((curElem) => {
                  return (
                    <div className="eachItem" key={curElem.id}>
                      <h3>{curElem.name}</h3>
                      <div className="todo-btn">
                        <i
                          className="far fa-edit"
                          onClick={() => editItem(curElem.id)}
                        ></i>
                        <i
                          className="far fa-trash-alt"
                          onClick={() => deleteItem(curElem.id)}
                        ></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* remove al  button */}
            <div>
              <div className="showItems">
                <button
                  className="btn effect04"
                  data-sm-link-text="Remove All"
                  onClick={removeAll}
                >
                  <span>Check List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
