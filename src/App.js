import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import SearchFrom from "./components/SearchForm";
import TableContainer from "./components/TableContainer";
import { UserProvider } from "./utils/userContext"
import API from "./utils/API";
import UserModel from "./utils/userContext";

import "./App.css";


function App() {

  const [developerState, setDeveloperState] = useState(UserModel);

  useEffect(() => {
    API.getUsers().then(results => {
      setDeveloperState(
        {
          image: results[0].picture.thumbnail,
          name: results[0].name.first + " " + results[0].name.last,
          phone: results[0].phone,
          email: results[0].email,
          DOB: results[0].dob.date
        }
      );
    });
  }, []);


  return (
    <UserProvider value={developerState}>
      <Nav />
      <SearchFrom />
      <TableContainer />
    </UserProvider>
  );
}

export default App;
