import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
          confirmPassword: ''
        };
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        );
      }      
}

export default RegistrationForm;