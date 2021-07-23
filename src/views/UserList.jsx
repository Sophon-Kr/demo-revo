import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";
import * as action from "../middleware/action";

export class UserList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     allUsers: "a",
  //   };
  // }
  render() {
    const allUsers = this.props.userFromList;
    // console.log("allUsers", allUsers);
    let lists = (
      <div>
        <h1>data not found</h1>
      </div>
    );
    if (allUsers.length !== 0) {
      console.log("allUsers", allUsers);
      lists = allUsers.map((item) => (
        <div key={item.id}>
          <User data={item} />
        </div>
      ));
    }
    return (
      <div>
        <h1>UserList</h1>
        {lists}
      </div>
    );
  }
  componentDidMount() {
    this.props.getAllusers();
    console.log("getAllusers", this.props.getAllusers());
  }
}

const mapStateToProps = (state) => {
  return {
    userFromList: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllusers: () => {
      return dispatch(action.getUserList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
