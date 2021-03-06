import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import FormInput from "../../common/FormInput";
import * as itemAction from "../../../redux/actions/itemAction";

const emptyFilter = {
  name: "",
  account: "",
  measure: "",
  fromAmount: "",
  toAmount: "",
  code: "",
};

const AllItemsPage = (props) => {
  const { items, onLoadItems, OnDeleteItem } = props;
  const [filter, setFilter] = useState(emptyFilter);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    onLoadItems();
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    let tempFilter = filter;
    tempFilter[event.target.name] = event.target.value;
    setFilter({ ...filter, [event.target.name]: event.target.value });

    let tempItems = items.filter(
      (item) =>
        item.name.toLowerCase().includes(tempFilter.name.toLowerCase()) &&
        (tempFilter.code === emptyFilter.code ||
          item.code.toLowerCase().includes(tempFilter.code.toLowerCase())) &&
        (tempFilter.account === emptyFilter.account ||
          item.account
            .toLowerCase()
            .includes(tempFilter.account.toLowerCase())) &&
        (tempFilter.measure === emptyFilter.measure ||
          item.measure
            .toLowerCase()
            .includes(tempFilter.measure.toLowerCase())) &&
        (tempFilter.fromAmount === emptyFilter.fromAmount ||
          item.price >= tempFilter.fromAmount) &&
        (tempFilter.toAmount === emptyFilter.toAmount ||
          item.price <= tempFilter.toAmount)
    );
    setFilteredItems(tempItems);
  };

  const handleDeleteClick = (id) => {
    OnDeleteItem(id);
  };

  return (
    <>
      <div style={{ display: "flex", marginTop: "70px" }}>
        <div style={{ margin: "1rem" }}>
          <FormInput
            type="text"
            name="name"
            placeholder="Име"
            value={filter.name}
            onChange={handleChange}
            className="input-line full-width"
          />
          <FormInput
            type="text"
            name="code"
            placeholder="Код"
            value={filter.code}
            onChange={handleChange}
            className="input-line full-width"
          />
          <FormInput
            type="text"
            name="fromAmount"
            placeholder="От сума"
            value={filter.fromAmount}
            onChange={handleChange}
            className="input-line full-width"
          />
        </div>
        <div style={{ margin: "1rem" }}>
          <FormInput
            type="text"
            name="measure"
            placeholder="Мярка"
            value={filter.measure}
            onChange={handleChange}
            className="input-line full-width"
          />
          <FormInput
            type="text"
            name="account"
            placeholder="Сметка"
            value={filter.account}
            onChange={handleChange}
            className="input-line full-width"
          />
          <FormInput
            type="text"
            name="toAmount"
            placeholder="До сума"
            value={filter.toAmount}
            onChange={handleChange}
            className="input-line full-width"
          />
        </div>
      </div>
      <div>
        {filteredItems &&
          filteredItems.map((item) => {
            return (
              <div>
                <p>
                  {item.name} = {item.price}
                  <img
                    alt="Invoice logo"
                    src="/img/delete.png"
                    onClick={() => handleDeleteClick(item.id)}
                    style={{
                      height: "2.5rem",
                      width: "2.5rem",
                      alignSelf: "baseline",
                    }}
                  />
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    filteredItems: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadItems: () => {
      dispatch(itemAction.loadItems());
    },
    OnDeleteItem: (id) => {
      dispatch(itemAction.deleteItem(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllItemsPage);
