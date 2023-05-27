import React, { Component } from 'react';

export default class UsersClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) // Added return statement
      .then(data => this.setState({ users: data }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="user-list" >
        {
          this.state.users.map((user, index) => ( // Added return statement and fixed parentheses
            <div  className="user-card" key={index}>
              <p className="user-name">Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          ))
        }
      </div>
    );
  }
}





