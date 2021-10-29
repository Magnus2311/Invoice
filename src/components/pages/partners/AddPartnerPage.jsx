import React, { useState, useContext } from "react";
import * as partnerAction from "../../../redux/actions/partnerAction";
import { connect } from "react-redux";
import "../../../css/addItemPage.css";
import { AuthContext } from "../../common/Contexts/AuthContext";
import AddBox from "../../common/AddBox";
import FormInput from "../../common/FormInput";
import FormCheckbox from "../../common/FormCheckbox";

const emptyPartner = {
  name: "",
  eik: "",
  vatNumber: "",
  contactName: "",
  isVat: false,
  isDeleted: false,
  email: "",
  nameInOtherLanguage: "",
  code: "",
};

const AddPartnerPage = (props) => {

  const [partner, setPartner] = useState(emptyPartner);

  const handleChange = (event) => {
    setPartner({ ...partner, [event.target.name]: event.target.value });
  };
  const handleCheckboxChange = (event)=>{
    debugger;
    if(event.target.value ==="on")
      setPartner({...partner,[event.target.name]: true});
    else      
      setPartner({...partner,[event.target.name]: false});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddPartner(partner);
    setPartner(emptyPartner);
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddBox>
        <div className="welcome">Добавяне на партньор</div>
        <div className="input-fields">
          <FormInput
            type="text"
            name="name"
            placeholder="Име"
            value={partner.name}
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Булстат"
            name="eik"
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="ДДС номер"
            name="vatNumber"
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Лице за контакт"
            name="contactName"
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Име на чужд език"
            name="nameInOtherLanguage"
            onChange={handleChange}
          />
          <FormInput
            type="text"
            placeholder="Код"
            name="code"
            onChange={handleChange}
          />
          <label>
          <input type="checkbox" name="isVat" onChange={handleCheckboxChange} />
          <span style={{margin:"7px"}}>Регистриран по ЗДДС</span>
        </label>
         
        </div>
      </AddBox>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPartner: (partner) => {
      dispatch(partnerAction.savePartner(partner));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPartnerPage);
