import React, { Component } from 'react';

// JSON data
import data from './data/user_roles.json';

// custom components
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import Card from './components/Card';

// css files
import "./css/main.css";
import "./css/form.css";
import "./css/card.css";
import "./css/mediaQ.css"

class App extends Component {
  state = {
    roleStatus: "active-inactive",
    users: [],
    filteredUsers: [],
    searchWord: ""
  }

  // update users depending on the combo box selection
  filterUsers = () => {
    const newData = data.filter(item => {
      if (this.state.roleStatus === "active-inactive") {
        return item;
      } else if (this.state.roleStatus === "active") {
        return item.active === true;
      } else {
        return item.active === false;
      }
    });
    this.setState({
      users: newData
    })
  }

  // render the cards to the screen through the card component
  displayCards = () => {
    let users = this.state.filteredUsers.length > 0 ? this.state.filteredUsers : this.state.users;
    const cards = users.map(item => {
      return <Card data={item} key={item.id} />
    });
    return cards;
  }

  // event handler for combo box
  roleStatusChange = (e) => {
    this.setState({
      roleStatus: e.target.value,
      filteredUsers: [],
      searchWord: ""
    }, () => {
      this.filterUsers();
    })
  }

  // event handler for role click
  createNewRoleClick = () => {
    alert("This would create a new card. :)")
  }

  // event handler for search bar
  onSearchBar = (e) => {
    this.setState({
      searchWord: e.target.value
    }, () => {
      this.filterSearchResults();
    });
  }

  // filter all the search results in to the filtered users state
  filterSearchResults = () => {
    let currentUsers = [];
    let updateUsers = [];
    if (this.state.searchWord !== "") {
      const word = this.state.searchWord;
      currentUsers = this.state.users;
      updateUsers = currentUsers.filter(user => {
        const userLc = user.name.toLowerCase();
        const wordLc = word.toLowerCase();
        return userLc.includes(wordLc);
      });
    } else {
      updateUsers = this.state.users;
    }
    this.setState({
      filteredUsers: updateUsers
    })
  }

  // start the app displaying all the users
  componentDidMount() {
    this.filterUsers();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <ControlPanel roleStatusChange={this.roleStatusChange} createNewRoleClick={this.createNewRoleClick} onSearchBar={this.onSearchBar} searchBarValue={this.state.searchWord} />
        <main className="main">
          {this.displayCards()}
        </main>
      </div>
    );
  }
}

export default App;
