// import React, { useState, useEffect } from "react";
// import "./SearchBar.css";
// import { FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   const [input, setInput] = useState("");
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data);
//         setFilteredUsers(data); // Set filteredUsers to full list initially
//       });
//   }, []);

//   useEffect(() => {
//     if (input === "") {
//       setFilteredUsers(users); // If input is empty, show all users
//     } else {
//       const query = input.toLowerCase();
//       const results = users.filter((user) =>
//         user.name.toLowerCase().includes(query)
//       );
//       setFilteredUsers(results);
//     }
//   }, [input, users]);

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <>
//       <div className="input-wrapper">
//         <FaSearch id="search-icon" />
//         <input
//           type="text"
//           placeholder="Type to search..."
//           value={input}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="results">
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user) => (
//             <div key={user.id} className="user-item">
//               {user.name}
//             </div>
//           ))
//         ) : (
//           <div className="no-results">No results found</div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SearchBar;




// import React, { useState } from "react";
// import "./SearchBar.css";
// import { FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   const [input, setInput] = useState("");
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);

//   // Fetch data function
//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const data = await response.json();
//       setUsers(data);
//       setFilteredUsers(data); // Show all users by default
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   // Fetch data on component mount
//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setInput(value);

//     if (value === "") {
//       // Show all users if input is empty
//       setFilteredUsers(users);
//     } else {
//       // Filter users based on the input value
//       const query = value.toLowerCase();
//       const results = users.filter((user) =>
//         user.name.toLowerCase().includes(query)
//       );
//       setFilteredUsers(results);
//     }
//   };

//   return (
//     <>
//       <div className="input-wrapper">
//         <FaSearch id="search-icon" />
//         <input
//           type="text"
//           placeholder="Type to search..."
//           value={input}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="results">
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user) => (
//             <div key={user.id} className="user-item">
//               {user.name}
//             </div>
//           ))
//         ) : (
//           <div className="no-results">No results found</div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SearchBar;




import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch data function
  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data); // Store the full list of users
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value === "") {
      // If input is empty, set filteredUsers to an empty array
      setFilteredUsers([]);
    } else {
      // Filter users based on the input value
      const query = value.toLowerCase();
      const results = users.filter((user) =>
        user.name.toLowerCase().includes(query)
      );
      setFilteredUsers(results);
    }
  };

  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Type to search..."
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className="results">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="user-item">
              {user.name}
            </div>
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
