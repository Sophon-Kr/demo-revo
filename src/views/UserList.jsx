import React, { Component } from "react";
import User from "./User";
import { connect } from "react-redux";
import * as action from "../middleware/action";
import {
  withStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const theme = createTheme({
  palette: {
    primary: {
      main: "#283593",
    },
    secondary: {
      main: "#e0f7fa",
    },
  },
});

const useStyles = (theme) => ({
  card: {
    maxWidth: 400,
    marginTop: 30,
  },
  media: {
    height: 250,
  },
  buttonColor: {
    backgroundColor: "#e57373",
    // warning: "#ffb74d",
    // error: "#e57373",
  },
});
export class UserList extends Component {
  render() {
    const { classes } = this.props;
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
        <ThemeProvider theme={theme}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {lists}
          </Grid>
        </ThemeProvider>
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
