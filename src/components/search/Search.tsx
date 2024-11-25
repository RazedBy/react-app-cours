import React, { useState } from "react";
import "./search.css";

interface SearchProps {
  placeholder: string;
  data: string[];
}

const Search: React.FC<SearchProps> = ({ placeholder, data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="last container center">
      <div className="dim">
        <input
          type="text"
          placeholder={placeholder || "Search..."}
          value={searchTerm}
          onChange={handleSearch}
          className="searchBar"
        />
        <ul className="searchItem">
          {filteredData.map((item, index) => (
            <li key={index} className="searchItem">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;