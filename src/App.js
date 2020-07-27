import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import SearchFrom from "./components/SearchForm";
import TableContainer from "./components/TableContainer";
import { UserProvider } from "./utils/userContext"
import API from "./utils/API";
import "./App.css";

function App() {
  const [developerState, setDeveloperState] = useState([]);

  useEffect(() => {
    API.getUsers().then(res => {
      const users = [];
      for (let i = 0; i < res.data.results.length; i++) {
        let user = {
          id: i,
          image: res.data.results[i].picture.thumbnail,
          name: res.data.results[i].name.first + " " + res.data.results[i].name.last,
          phone: res.data.results[i].phone,
          email: res.data.results[i].email,
          DOB: res.data.results[i].dob.date
        }
        users.push(user);
      };
      setDeveloperState(users);
    });
  }, []);

  function handleSearch(e) {

    const { value } = e.target;
    let searchbyName = developerState.filter(data =>
      new RegExp(value, "i").test(data.name)
    );
    console.log(searchbyName);
    setDeveloperState(searchbyName);
  }

  return (
    <UserProvider value={developerState}>
      <Nav />
      <SearchFrom handleSearch={handleSearch} />
      <TableContainer />
    </UserProvider>
  );
}

export default App;