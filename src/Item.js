import React from "react";

const Item = ({ x, showSomeAlert }) => {
  return (
    <div
      style={{
        padding: "10px",
        borderRadius: "10px",
        margin: "10px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between ",
      }}
      key={x.id}
    >
      <span>
        {x.id}: {x.name}
      </span>
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => showSomeAlert(x)}
      >
        Delete
      </span>
    </div>
  );
};

export default Item;
