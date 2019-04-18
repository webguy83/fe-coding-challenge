import React, { Component } from 'react';
import "./css/main.css";
import "./css/form.css";
import "./css/card.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="header__content">User Roles Management</h1>
        </header>
        <section className="control-panel">
          <form action="#" className="control-panel__form">
            <div className="search-group">
              <input type="text" className="search" name="search" placeholder="search" />
              <i className="fas fa-search"></i>
            </div>
            <div className="role-status-container">
              <label htmlFor="role-status" className="role-status-label">Role Status</label>
              <select name="role-status" className="role-status-combobox">
                <option value="active-inactive">Active and Inactive</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </form>
          <button className="create-role-btn btn">Create New Role</button>
        </section>
        <main className="main">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </main>
      </div>
    );
  }
}

export default App;
