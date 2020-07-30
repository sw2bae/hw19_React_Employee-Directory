import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import SearchFrom from "./components/SearchForm";
import TableContainer from "./components/TableContainer";
import { UserProvider } from "./utils/userContext"
import API from "./utils/API";
import "./App.css";

function App() {
  // const [developerState, setDeveloperState] = useState([]);
  const [users, setUsers] = useState([{}]);
  const [filteredUsers, setFilteredUsers] = useState([{}]);


  useEffect(() => {
    API.getUsers().then(res => {
      let hold = [];
      for (let i = 0; i < res.data.results.length; i++) {
        let user = {
          id: i,
          image: res.data.results[i].picture.thumbnail,
          name: res.data.results[i].name.first + " " + res.data.results[i].name.last,
          phone: res.data.results[i].phone,
          email: res.data.results[i].email,
          DOB: res.data.results[i].dob.date
        }
        hold.push(user);
      };
      setUsers(hold);
      setFilteredUsers(hold);
    });
  }, []);

  function handleSearch(e) {
    const { value } = e.target;
    let searchByName = users.filter(data =>
      new RegExp(value, "i").test(data.name)
    );

    setFilteredUsers(searchByName);
  }


  function sortByChar(e) {
    e.preventDefault();
    setFilteredUsers({});
  }

  function sortByNum(e) {
    e.preventDefault();
    alert("hello")
  }

  return (
    <UserProvider value={filteredUsers}>
      <Nav />
      <SearchFrom handleSearch={handleSearch} />
      <TableContainer sortByChar={sortByChar} sortByNum={sortByNum} />
    </UserProvider>
  );
}

export default App;