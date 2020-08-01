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
    if (btnStatus.charmode === "⬇") {
      setBtnStatus({ ...btnStatus, charmode: "⬆" });
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
      const filteredUsersCopy0 = [...filteredUsers];
      let sortedbyName = filteredUsersCopy0.sort(byName);
      // console.log(sortedbyName);
      setFilteredUsers(sortedbyName);
    } else {
      setBtnStatus({ ...btnStatus, charmode: "⬇" });
      let byName = function (a, b) {
        var nameA = a.name.replace(/ /gi, "").toUpperCase();
        var nameB = b.name.replace(/ /gi, "").toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      }
      const filteredUsersCopy1 = [...filteredUsers];
      let sortedbyName = filteredUsersCopy1.sort(byName);
      // console.log(sortedbyName);
      setFilteredUsers(sortedbyName);
    }
    // console.log(btnStatus);
  }

  function sortByNum(e) {
    if (btnStatus.nummode === "⬇") {
      setBtnStatus({ ...btnStatus, nummode: "⬆" });
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
    } else {
      setBtnStatus({ ...btnStatus, nummode: "⬇" });
      let byNum = function (a, b) {
        var numA = a.DOB.replace("-", "");
        var numB = b.DOB.replace("-", "");
        if (numA > numB) {
          return -1;
        }
        if (numA < numB) {
          return 1;
        }
        return 0;
      }
      const filteredUsersCopy3 = [...filteredUsers];
      let sortedbyNum = filteredUsersCopy3.sort(byNum);
      // console.log(sortedbyNum);
      setFilteredUsers(sortedbyNum);
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