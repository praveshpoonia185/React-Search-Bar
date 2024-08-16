import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setUsers(result);
      setFilteredUsers(result);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const searchInput = e.target.value;
    setInput(searchInput);

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <>
      <div className="search-input">
        <FaSearch />
        <input
          type="text"
          placeholder="Search here..."
          value={input}
          onChange={handleChange}
        />
      </div>

      {filteredUsers.map((user) => (
        <>
          <div key={user.id}>{user.name}</div>
        </>
      ))}
    </>
  );
};

export default SearchBar;