import React from "react";
import { FaSearch } from "react-icons/fa";
import { InputText } from "primereact/inputtext"
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css"

import "primereact/resources/themes/saga-blue/theme.css";
import { Dropdown } from "primereact/dropdown"




const sortOptions = [
  { label: "Coffee", value: "!price" },
  { label: "Electronics", value: "price" },
];

const onSortChange = (event) => {
  const value = event.value;

  if (value.indexOf("!") === 0) {
    setSortOrder(-1);
    setSortField(value.substring(1, value.length));
    setSortKey(value);
  } else {
    setSortOrder(1);
    setSortField(value);
    setSortKey(value);
  }
};

const SearchBar = () => {
  return (
    <>
      <div className="ml-12">
        <Dropdown
          className="p-text-small"
          value=""
          options={sortOptions}
          optionLabel="label"
          placeholder="ALL"
          onChange=""
        />

        <div className=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
      </div>
      <span className="p-input-icon-right">
        <i className="pi pi-search" />
        <InputText  type="search" placeholder="Search by Name" />
      </span>

      {/* <Button
	    className="bg-yellow-400"
        type="submit"
        aria-label="Search"
       
      >
        
       
      </Button> */}
    </>
  );
};

export default SearchBar;