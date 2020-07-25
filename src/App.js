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
    API.getUsers().then();
  })


  return (
    <UserProvider>
      <Nav />
      <SearchFrom />
      <TableContainer />
    </UserProvider>
  );
}

export default App;
