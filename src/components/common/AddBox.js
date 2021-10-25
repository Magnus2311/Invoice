import React from "react";

const AddBox = (props) => {
  const addBtnText = props.btnText ?? "Добавяне";

  return (
    <div className="add-box">
      {props.children}
      <div className="centerItems" style={{ marginTop: "20px" }}>
        <button className="ghost-round middle-width " type="submit">
          {addBtnText}
        </button>
      </div>
    </div>
  );
};

export default AddBox;
