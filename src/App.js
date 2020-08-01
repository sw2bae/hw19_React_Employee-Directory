import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import SearchFrom from "./components/SearchForm";
import TableContainer from "./components/TableContainer";
import { UserProvider } from "./utils/userContext"
import API from "./utils/API";
import "./App.css";
import { BtnProvider } from "./utils/btnContext";

function App() {
  const [users, setUsers] = useState([{}]);
  const [filteredUsers, setFilteredUsers] = useState([{}]);

  const [btnStatus, setBtnStatus] = useState({
    charmode: "⬇",
    nummode: "⬇"
  }
  );


  useEffect(() => {
    API.getUsers().then(res => {
      let dataInit = [];
      for (let i = 0; i < res.data.results.length; i++) {
        let user = {
          uuid: res.data.results[i].login.uuid,
          image: res.data.results[i].picture.thumbnail,
          name: res.data.results[i].name.first + " " + res.data.results[i].name.last,
          phone: res.data.results[i].phone,
          email: res.data.results[i].email,
          DOB: res.data.results[i].dob.date.substring(0, 10)
        }
        dataInit.push(user);
      };
      setUsers(dataInit);
      setFilteredUsers(dataInit);
    });
  }, []);

  function handleSearch(e) {
    const { value } = e.target;
    let searchByName = users.filter(data =>
      new RegExp(value, "i").test(data.name)
    );
    // console.log(searchByName);
    setFilteredUsers(searchByName);
  }


  function sortByChar(e) {
    let byName = function (a, b) {
      var nameA = a.name.replace(/ /gi, "").toUpperCase();
      var nameB = b.name.replace(/ /gi, "").toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
    const filteredUsersCopy = [...filteredUsers];
    let sortedbyName = filteredUsersCopy.sort(byName);
    // console.log(sortedbyName);
    setFilteredUsers(sortedbyName);

    if (btnStatus.charmode === "⬇") {
      setBtnStatus({ ...btnStatus, charmode: "⬆" });
    } else {
      setBtnStatus({ ...btnStatus, charmode: "⬇" });
    }
    // console.log(btnStatus);
  }

  function sortByNum(e) {
    let byNum = function (a, b) {
      var numA = a.DOB.replace("-", "");
      var numB = b.DOB.replace("-", "");
      if (numA < numB) {
        return -1;
      }
      if (numA > numB) {
        return 1;
      }
      return 0;
    }
    const filteredUsersCopy2 = [...filteredUsers];
    let sortedbyNum = filteredUsersCopy2.sort(byNum);
    // console.log(sortedbyNum);
    setFilteredUsers(sortedbyNum);

    if (btnStatus.nummode === "⬇") {
      setBtnStatus({ ...btnStatus, nummode: "⬆" });
    } else {
      setBtnStatus({ ...btnStatus, nummode: "⬇" });
    }
    // console.log(btnStatus);
  }

  return (
    <UserProvider value={filteredUsers}>
      <Nav />
      <SearchFrom handleSearch={handleSearch} />
      <BtnProvider value={btnStatus}>
        <TableContainer sortByChar={sortByChar} sortByNum={sortByNum} />
      </BtnProvider>
    </UserProvider>
  );
}

export default App;