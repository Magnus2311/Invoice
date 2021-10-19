import React, { useState } from "react";
import AddBox from "../../common/AddBox";
import FormInput from "../../common/FormInput";
import * as myCompanyService from "../../../services/my-company/myCompany";

const emptyCompany = {
  companyName: "",
  bulstat: "",
  vatNumber: "",
  manager: "",
  address: {
    country: "",
    city: "",
    address: "",
    phoneNumber: "",
    email: "",
  },
  bankAccounts: [
    {
      bankName: "",
      swiftCode: "",
      IBAN: "",
    },
  ],
};

const MyCompanyPage = () => {
  const [myCompany, setMyCompany] = useState(emptyCompany);
  const handleSubmit = async () => {
    await myCompanyService.updateCompanyData(myCompany);
  };

  const handleChange = (event) => {
    setMyCompany({ ...myCompany, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddBox>
        <div className="welcome">Моята фирма</div>
        <div className="input-fields">
          <FormInput
            type="text"
            name="companyName"
            placeholder="Име на фирмата"
            value={myCompany.companyName}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="bulstat"
            placeholder="Булстат"
            value={myCompany.bulstat}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="vatNumber"
            placeholder="ДДС Номер"
            value={myCompany.vatNumber}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="manager"
            placeholder="МОЛ"
            value={myCompany.manager}
            onChange={handleChange}
          />
        </div>
        <div className="welcome">Адрес</div>
        <div className="input-fields">
          <FormInput
            type="text"
            name="address.country"
            placeholder="Държава"
            value={myCompany.address.country}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address.city"
            placeholder="Град"
            value={myCompany.address.city}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address.address"
            placeholder="Адрес"
            value={myCompany.address.address}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address.phoneNumber"
            placeholder="Телефон"
            value={myCompany.address.phoneNumber}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address.email"
            placeholder="Email"
            value={myCompany.address.email}
            onChange={handleChange}
          />
        </div>
        <div className="welcome">Банкова сметка</div>
        <div className="input-fields">
          <FormInput
            type="text"
            name="address.country"
            placeholder="Държава"
            value={myCompany.address.country}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address.city"
            placeholder="Град"
            value={myCompany.address.city}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address.address"
            placeholder="Адрес"
            value={myCompany.address.address}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address.phoneNumber"
            placeholder="Телефон"
            value={myCompany.address.phoneNumber}
            onChange={handleChange}
          />

          <FormInput
            type="text"
            name="address.email"
            placeholder="Email"
            value={myCompany.address.email}
            onChange={handleChange}
          />
        </div>
      </AddBox>
    </form>
  );
};

export default MyCompanyPage;
