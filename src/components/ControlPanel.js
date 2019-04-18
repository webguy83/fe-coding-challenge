import React from 'react';

const ControlPanel = () => {
    return (
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
    );
};

export default ControlPanel;