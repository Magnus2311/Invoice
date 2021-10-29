import React, { useState, useContext } from "react";
import * as itemAction from "../../../redux/actions/itemAction";
import { connect } from "react-redux";
import { AuthContext } from "../../common/Contexts/AuthContext";
import "../../../css/addItemPage.css";
import AddBox from "../../common/AddBox";
import FormInput from "../../common/FormInput";

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

  const handleChange = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddItem(item);
    setItem(emptyItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddBox>
        <div className="welcome">Добавяне на стока</div>
        <div className="input-fields">
          <FormInput
            type="text"
            name="name"
            placeholder="Име"
            value={item.name}
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Баркод"
            name="barcode"
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Код"
            name="code"
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Мярка"
            name="measure"
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Единична цена"
            name="price"
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Сметка"
            name="account"
            onChange={handleChange}
          />
        </div>
      </AddBox>
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
