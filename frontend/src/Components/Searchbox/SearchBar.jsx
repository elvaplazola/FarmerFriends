import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import all_prod from "../Assets/all_prod.json";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch({ all_prod }) //Backend URL go here!
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((name, category) => {
          return value && name && category;
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
<<<<<<< Updated upstream
      <input id="search-text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
=======
      <input
        type="text"
        placeholder="Search by name on farmer friend..."
        value={searchTerm}
        onChange={handleChange}
>>>>>>> Stashed changes
      />
    </div>
  );
};

export default SearchBar;