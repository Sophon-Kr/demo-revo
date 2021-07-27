import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// import DragandDrop from "./draganddrop/index";

export class Task extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            component="div"
            style={{
              backgroundColor: "#cfe8fc",
              height: "100vh",
              textAlign: "center",

              padding: 20,
            }}
          >
            <h1 style={{ padding: 30 }}>Test drag and drop</h1>
            {/* ======================================================== */}
            {/* <DragandDrop /> */}
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default Task;
