import React, { useEffect } from "react";
import "./Search.css";
import CmdIcon from "../../assets/cmd";
import SearchIcon from "../../assets/search";

export interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  onSearch,
}) => {
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    onChange(e.currentTarget.value);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key == "k") {
        alert("Hello search bar opener");
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="search-bar">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <input
        type="text"
        value={value}
        onChange={_onChange}
        placeholder={placeholder}
      />
      <button onClick={() => {}}>
        <span role="img" aria-label="command icon">
          <CmdIcon />
        </span>
      </button>
    </div>
  );
};

export default Search;
