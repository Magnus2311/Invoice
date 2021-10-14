import React, { useState, useContext } from "react";
import * as itemAction from "../../../redux/actions/itemAction";
import { connect } from "react-redux";
import { AuthContext } from "../../common/Contexts/AuthContext";
import "../../../css/addItemPage.css";

const emptyItem = {
  name: "",
  barcode: "",
  price: 0.0,
  code: "",
  measure: "",
  account: "",
  userId: "",
};
const AddItemPage = (props) => {
  const [item, setItem] = useState(emptyItem);
  const { userC } = useContext(AuthContext);

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    debugger;
    setItem({ ...item, user: userC });
    event.preventDefault();
    props.onAddItem(item);
    setItem(emptyItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-box">
        <div className="welcome">Добавяне на стока</div>
        <div className="input-fields">
          <input
            type="text"
            name="name"
            placeholder="Име"
            value={item.name}
            onChange={handleChange}
            className="input-line full-width"
          ></input>
          <input
            type="text"
            placeholder="Баркод"
            name="barcode"
            onChange={handleChange}
            className="input-line full-width"
          ></input>
          <input
            type="text"
            placeholder="Код"
            name="code"
            onChange={handleChange}
            className="input-line full-width"
          ></input>
          <input
            type="text"
            placeholder="Мярка"
            name="measure"
            onChange={handleChange}
            className="input-line full-width"
          ></input>
          <input
            type="text"
            placeholder="Единична цена"
            name="price"
            onChange={handleChange}
            className="input-line full-width"
          ></input>
          <input
            type="text"
            placeholder="Сметка"
            name="account"
            onChange={handleChange}
            className="input-line full-width"
          ></input>
        </div>
        <div className="centerItems" style={{ marginTop: "20px" }}>
          <button className="ghost-round middle-width " type="submit">
            Добавяне
          </button>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (item) => {
      dispatch(itemAction.saveItem(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);
