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
    users: []
  }

  filterUsers = () => {
    const newData = data.filter(item => {
      if(this.state.roleStatus === "active-inactive") {
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

  displayCards = () => {
    const cards = this.state.users.map(item => {
      return <Card data={item} key={item.id} />
    });
    return cards;
  }

  roleStatusChange = (e) => {
    this.setState({
      roleStatus: e.target.value
    }, () => {
      this.filterUsers();
    })
  }

  createNewRoleClick = () => {
    alert("This would create a new card. :)")
  }

  componentDidMount() {
    this.filterUsers();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <ControlPanel roleStatusChange={this.roleStatusChange} createNewRoleClick={this.createNewRoleClick} />
        <main className="main">
          {this.displayCards()}
        </main>
      </div>
    );
  }
}

export default App;
