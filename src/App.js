import React, { Component } from 'react';

// custom components
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';

// css files
import "./css/main.css";
import "./css/form.css";
import "./css/card.css";
import "./css/mediaQ.css"

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Header />
        <ControlPanel />
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
              <i className="fas fa-lock"></i>
            </footer>
            <footer className="card__footer card__footer-editMode" style={{display: "none"}}>
              <p className="card__date-stamp">Last update: 11/01/2019</p>
              <button className="card__footer-edit-delete-btn">Edit</button>
              <button className="card__footer-edit-delete-btn">Delete</button>
            </footer>
          </div>
          <div className="card">
            <div className="card__group">
              <div className="card__inactive-label" style={{visibility: "hidden"}}>
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
            <footer className="card__footer card__footer-noneditMode" style={{display: "none"}}>
              <p className="card__date-stamp">Date created: 11/01/2019</p>
              <i className="fas fa-lock"></i>
            </footer>
            <footer className="card__footer card__footer-editMode">
              <p className="card__date-stamp">Last update: 11/01/2019</p>
              <button className="card__footer-edit-delete-btn">Edit</button>
              <button className="card__footer-edit-delete-btn">Delete</button>
            </footer>
          </div>
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
              <i className="fas fa-lock"></i>
            </footer>
            <footer className="card__footer card__footer-editMode" style={{display: "none"}}>
              <p className="card__date-stamp">Last update: 11/01/2019</p>
              <button className="card__footer-edit-delete-btn">Edit</button>
              <button className="card__footer-edit-delete-btn">Delete</button>
            </footer>
          </div>
          <div className="card">
            <div className="card__group">
              <div className="card__inactive-label" style={{visibility: "hidden"}}>
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
            <footer className="card__footer card__footer-noneditMode" style={{display: "none"}}>
              <p className="card__date-stamp">Date created: 11/01/2019</p>
              <i className="fas fa-lock"></i>
            </footer>
            <footer className="card__footer card__footer-editMode">
              <p className="card__date-stamp">Last update: 11/01/2019</p>
              <button className="card__footer-edit-delete-btn">Edit</button>
              <button className="card__footer-edit-delete-btn">Delete</button>
            </footer>
          </div>
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
              <i className="fas fa-lock"></i>
            </footer>
            <footer className="card__footer card__footer-editMode" style={{display: "none"}}>
              <p className="card__date-stamp">Last update: 11/01/2019</p>
              <button className="card__footer-edit-delete-btn">Edit</button>
              <button className="card__footer-edit-delete-btn">Delete</button>
            </footer>
          </div>
          <div className="card">
            <div className="card__group">
              <div className="card__inactive-label" style={{visibility: "hidden"}}>
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
            <footer className="card__footer card__footer-noneditMode" style={{display: "none"}}>
              <p className="card__date-stamp">Date created: 11/01/2019</p>
              <i className="fas fa-lock"></i>
            </footer>
            <footer className="card__footer card__footer-editMode">
              <p className="card__date-stamp">Last update: 11/01/2019</p>
              <button className="card__footer-edit-delete-btn">Edit</button>
              <button className="card__footer-edit-delete-btn">Delete</button>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
