import React from "react";
import FormInput from "../../common/FormInput";
import * as myCompanyServices from "../../../services/my-company/myCompany";
import { toast } from "react-toastify";

const SearchForCompany = props => {
  const { name, placeholder, value, onChange, className, style, onSuccessfulSearch } = props;

  const handleSearchClick = async () => {
    myCompanyServices.searchByBulstat(value).then(reponse => {
      if (reponse.ok) {
        toast.success("Данните за фирмата бяха попълнени успешно!");
        onSuccessfulSearch(await reponse.json());
      } else {
        toast.success("В момента търсенето по булстат не е достъпно. Моля опитайте по-късно.")
      }
    })
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        width: "100%",
      }}
    >
      <FormInput
        type="text"
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        style={style}
      />
      <img
        onClick={handleSearchClick}
        src="./img/search.png"
        style={{
          width: "1rem",
          height: "1rem",
          cursor: "pointer",
          position: "absolute",
          right: "0.125rem",
          top: "1.5rem",
        }}
      />
    </div>
  );
};

export default SearchForCompany;
