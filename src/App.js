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
          <div className="card">
            <div className="card__group">
              <div className="card__inactive-label">
                <p>Inactive</p>
              </div>
              <h2 className="card__name">Super Administrator</h2>
              <p className="card__type">Job Administration Role</p>
              <p className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              <div className="card__user">
                <img src="http://placekitten.com/60/60" alt="User" className="card__user__photo" />
                <img src="http://placekitten.com/60/60" alt="User" className="card__user__photo" />
                <img src="http://placekitten.com/60/60" alt="User" className="card__user__photo" />
                <img src="http://placekitten.com/60/60" alt="User" className="card__user__photo" />
              </div>
            </div>
            <footer className="card__footer card__footer-noneditMode">
              <p className="card__date-stamp">Date created: 11/01/2019</p>
              <i class="fas fa-lock"></i>
            </footer>
            <footer className="card__footer card__footer-editMode">
              <p className="card__date-stamp">Last update: 11/01/2019</p>
              <button className="card__footer-edit-delete-btn">Edit</button>
              <button className="card__footer-edit-delete-btn">Delete</button>
            </footer>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </main>
      </div>
    );
  }
}

export default App;
