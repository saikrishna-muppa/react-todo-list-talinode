import React, { useState } from "react";
import "./styles.css";
import { GrRefresh } from "react-icons/gr";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  // const addeditem = (e) => {
  //   setInputValue(e.target.value);
  // };

  const addItem = (e) => {
    // console.log(inputValue, "inputvalue");
    const newItem = {
      id: new Date().getTime(),
      fav: false,
      title: inputValue
    };

    setItems((oldState) => [...oldState, newItem]);
    setInputValue("");
    // console.log(inputValue, "setinput");
  };

  const makeFav = (id) => {
    console.log("id prop", id);

    const allItems = [...items];
    const itemIndex = allItems.findIndex((item) => item.id === id);
    allItems[itemIndex].fav = !allItems[itemIndex].fav;
    setItems(allItems);
    console.log("itemIndex", itemIndex);
  };

  const reset = (items) => {
    setItems([]);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h3>To do list</h3>
        <input
          type="text"
          placeholder="+ Add a task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add" onClick={(e) => addItem(e)}>
          Add
        </button>
        <button className="reset" onClick={() => reset()}>
          <GrRefresh /> Reset all tasks
        </button>
        <hr />

        {items
          .filter((item) => item.fav === false)
          .map((item) => {
            if (item.title.length > 1) {
              return (
                <div className="todo" key={item.id}>
                  <div>
                    <button
                      className="non"
                      onClick={() => makeFav(item.id)}
                    ></button>
                  </div>
                  <div className="text"> {item.title}</div>
                </div>
              );
            }
          })}
        <hr />
        <h2>completed</h2>
        {items
          .filter((item) => item.fav === true)
          .map((item) => {
            if (item.title.length > 1) {
              return (
                <div className="todo" key={item.id}>
                  <div>
                    <button
                      className="com"
                      onClick={() => makeFav(item.id)}
                    ></button>
                  </div>
                  <div className="text"> {item.title}</div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};
export default App;
