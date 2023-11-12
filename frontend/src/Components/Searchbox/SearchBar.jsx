import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
//import data from "../Assets/all_prod.json";

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Search by name on farmer friend..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm ? (
        <ul>
          {filteredData.map((props, item, i) => (
            <Link to={`/product/${props.id}`}>
              <Item key={i} id={item.id} name={item.name} />
              <p>{props.name}</p>
            </Link>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchBar;
