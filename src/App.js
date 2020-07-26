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
    API.getUsers().then(res => {
      // console.log(res);
      let image = [];
      let name = [];
      let phone = [];
      let email = [];
      let DOB = [];
      for (let i = 0; i < res.data.results.length; i++) {
        image.push(res.data.results[i].picture.thumbnail);
        name.push(res.data.results[i].name.first + " " + res.data.results[i].name.last);
        phone.push(res.data.results[i].phone);
        email.push(res.data.results[i].email);
        DOB.push(res.data.results[i].dob.date);
      };
      setDeveloperState(
        {
          image: image,
          name: name,
          phone: phone,
          email: email,
          DOB: DOB
        }
      );
    });
  }, []);

  console.log(developerState);
  return (
    <UserProvider value={developerState}>
      <Nav />
      <SearchFrom />
      <TableContainer />
    </UserProvider>
  );
}

export default App;
