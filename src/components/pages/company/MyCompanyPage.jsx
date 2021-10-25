import React, { useEffect, useState } from "react";
import AddBox from "../../common/AddBox";
import FormInput from "../../common/FormInput";
import * as myCompanyService from "../../../services/my-company/myCompany";

const emptyAddress = {
  id: 0,
  country: "",
  city: "",
  address: "",
  phoneNumber: "",
  email: "",
};

const emptyBankAccount = {
  id: 0,
  bankName: "",
  swiftCode: "",
  iban: "",
};

const emptyCompany = {
  id: 0,
  companyName: "",
  bulstat: "",
  vatNumber: "",
  manager: "",
  addresses: [],
  bankAccounts: [],
};

const MyCompanyPage = () => {
  const [myCompany, setMyCompany] = useState(emptyCompany);
  const [address, setAddress] = useState(emptyAddress);
  const [bankAccount, setBankAccount] = useState(emptyBankAccount);

  useEffect(() => {
    const fetchMyCompany = async () => {
      var tempCompany = await myCompanyService.loadMyCompany();
      setMyCompany(tempCompany);
      setAddress(tempCompany.addresses[0] ?? emptyAddress);
      setBankAccount(tempCompany.bankAccounts[0] ?? emptyBankAccount);
    };

    fetchMyCompany();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempCompany = myCompany;
    tempCompany.addresses[0] = address;
    tempCompany.bankAccounts[0] = bankAccount;

    setMyCompany(tempCompany);
    await myCompanyService.updateCompanyData(tempCompany);
  };

  const handleChange = (event) => {
    setMyCompany({ ...myCompany, [event.target.name]: event.target.value });
  };

  const handleAddressChange = (event) => {
    setAddress({ ...address, [event.target.name]: event.target.value });
  };

  const handleBankAccountChange = (event) => {
    setBankAccount({ ...bankAccount, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddBox btnText={myCompany.id ? "Обновяване" : ""}>
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
            name="country"
            placeholder="Държава"
            value={address.country}
            onChange={handleAddressChange}
          />

          <FormInput
            type="text"
            name="city"
            placeholder="Град"
            value={address.city}
            onChange={handleAddressChange}
          />

          <FormInput
            type="text"
            name="address"
            placeholder="Адрес"
            value={address.address}
            onChange={handleAddressChange}
          />

          <FormInput
            type="text"
            name="phoneNumber"
            placeholder="Телефон"
            value={address.phoneNumber}
            onChange={handleAddressChange}
          />

          <FormInput
            type="text"
            name="email"
            placeholder="Email"
            value={address.email}
            onChange={handleAddressChange}
          />
        </div>
        <div className="welcome">Банкова сметка</div>
        <div className="input-fields">
          <FormInput
            type="text"
            name="IBAN"
            placeholder="IBAN"
            value={bankAccount.iban}
            onChange={handleBankAccountChange}
          />

          <FormInput
            type="text"
            name="bankName"
            placeholder="Име на банка"
            value={bankAccount.bankName}
            onChange={handleBankAccountChange}
          />

          <FormInput
            type="text"
            name="swiftCode"
            placeholder="Swift Code"
            value={bankAccount.swiftCode}
            onChange={handleBankAccountChange}
          />
        </div>
      </AddBox>
    </form>
  );
};

export default MyCompanyPage;
