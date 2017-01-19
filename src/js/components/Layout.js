import React from "react"
import { connect } from "react-redux"

import { fetchUsers } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    users: store.users.users,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }
    fetchTweets() {
        this.props.dispatch(fetchUsers())
    }

  render() {
    const { users, tweets } = this.props;

    // if (!tweets.length) {
    //   return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    // }
      if (!users.length) {
          return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
      }

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

      const mappedUsers = users.map(user => <li>{user.name}</li>)
        console.log(mappedUsers)
    return <div>
        <ul>{mappedUsers}</ul>
      <ul>{mappedTweets}</ul>
    </div>
  }
}
