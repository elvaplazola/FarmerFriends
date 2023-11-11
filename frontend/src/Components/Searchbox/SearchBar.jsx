import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import all_prod from "../Assets/all_prod.json";

import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`${all_prod}`); //Backend URL go here! //"https://api.jsonserve.com/3fxrEh"
    //.then((response) => response.json())
    //.then((json) => {
    //const results = json.filter((name, category) => {
    //return name && category;
    //});
    //setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type here to search Farmer Friend..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

/*
import React, { useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import all_prod from "../Assets/all_prod.json";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        type="text"
        placeholder="Type here to search Farmer Friend..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {all_prod
        .filter((id) => {
          if (searchTerm === "") {
            return id;
          } else if (id.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return id;
          }
        })
        .map((id, name) => {
          return <div>{id.name} </div>;
        })}
    </div>
  );
}

export default SearchBar;

/*
import React, { useRef } from "react";
import { Form, FormGroup, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
 const dataRef = useRef('');
 const navigate = useNavigate();

 const searchMe = async () => {
  const name = dataRef.current.value;
  
  }
    const res = fetch('https://api.jsonserve.com/3fxrEh')
 };


import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import all_prod from "../Assets/all_prod.json";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`${all_prod}`); //Backend URL go here! //"https://api.jsonserve.com/3fxrEh"
    //.then((response) => response.json())
    //.then((json) => {
    //const results = json.filter((name, category) => {
    //return name && category;
    //});
    //setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type here to search Farmer Friend..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
*/
