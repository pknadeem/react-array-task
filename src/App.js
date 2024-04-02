// import React, { useState } from "react";
import React, { useState } from "react";
import Item from "./Item";

const App = () => {
  let [data, setData] = useState([
    { id: 1, name: "Ali" },
    { id: 2, name: "Hassan" },
    { id: 3, name: "Hamza" },
    { id: 4, name: "Nadeem" },
    { id: 5, name: "Farhan" },
    { id: 6, name: "Ali" },
    { id: 7, name: "Hassan" },
    { id: 8, name: "Hamza" },
    { id: 9, name: "Nadeem" },
    { id: 10, name: "Farhan" },
    { id: 11, name: "Ali" },
    { id: 12, name: "Hassan" },
    { id: 13, name: "Hamza" },
    { id: 14, name: "Nadeem" },
    { id: 15, name: "Farhan" },
    { id: 16, name: "Ali" },
    { id: 17, name: "Hassan" },
    { id: 18, name: "Hamza" },
    { id: 10, name: "Nadeem" },
    { id: 20, name: "Farhan" },
  ]);
  const [itemsToShow, setItemsToShow] = useState(10);

  const showSomeAlert = (itemOfArray) => {
    let newArray = data.filter((item) => item.id !== itemOfArray.id);
    setData(newArray);
  };

  const showMoreItems = () => {
    setItemsToShow((prevItems) => prevItems + 2);
  };

  return (
    <div>
      {data?.slice(0, itemsToShow).map((x) => (
        <Item x={x} showSomeAlert={showSomeAlert} />
      ))}
      {itemsToShow < data.length && (
        <button
          onClick={() => showMoreItems()}
          style={{
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            color: "black",
            background: "red",
            outline: "none",
            fontSize: "20px",
          }}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default App;
