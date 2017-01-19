import React from "react"
import { connect } from "react-redux"

import { fetchUsers } from "../actions/userActions"

@connect((store) => {
  return {
    users: store.users.users,
  };
})
export default class Layout extends React.Component {

  componentWillMount() {

  }

  fetchUsers() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    const { users } = this.props;

    const mappedUsers = users.map(user => <li key={user.id}>{user.name}</li>)


    return <div>

      <button onClick={this.fetchUsers.bind(this)}>load users</button>

      <ul>{mappedUsers}</ul>
    </div>
  }
}
