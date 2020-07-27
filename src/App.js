import React, { useState, useEffect, useReducer, useRef } from "react";
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
      let users = [];
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

  // const inputRef = useRef();
  // const [items, dispatch] = useReducer((state, action) => {
  //   switch(action.type){
  //     case 'SEARCH' :
  //       return [

  //       ];
  //   }
  // }, [developerState]);

  // function handleSearch(){

  // }

  // console.log(developerState);
  return (
    <UserProvider value={developerState}>
      <Nav />
      <SearchFrom />
      <TableContainer />
    </UserProvider>
  );
}

export default App;
