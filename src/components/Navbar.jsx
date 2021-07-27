import React from "react";
// import "./App.css";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
  alpha,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import BallotIcon from "@material-ui/icons/Ballot";
// import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBox from "@material-ui/icons/AccountBox";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
// import Task from "./TaskManagement";

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

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(0),
  },
  imglogo: {
    maxHeight: 35,
    maxWidth: 35,
    border: "1.5px solid white",
    borderRadius: 8,
    marginRight: 10,
  },
  menuGroup: {
    marginLeft: 20,
    marginRight: 20,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const options = [
  " ",
  "Front Desk",
  "Walk in",
  "Account",
  "Call centre",
  "Room plan",
  "Stay 360",
  "Guest stay",
  "Checkin",
  "Checkout",
  "Fast Posting",
  "Cashier banking",
  "City ledger",
  "Concierge ",
  "Room blocking",
  "Property ledger",
  "Property ledger",
];

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" disableGutters>
        <AppBar position="static">
          <Toolbar>
            {/* ---------------------------logo----------------------------------*/}
            <img className={classes.imglogo} src="logo.jpg" alt="logo" />
            <Typography
              variant="h5"
              color="inherit"
              style={{
                fontFamily: "Audiowide, sans-serif",
                textShadow: "2px 2px 2px #ababab",
              }}
            >
              Revosoft
            </Typography>
            {/* ---------------------------logo----------------------------------*/}
            {/* ---------------------------Menu----------------------------------*/}
            <Grid container spacing={2} className={classes.menuGroup}>
              <Grid item>
                <ButtonGroup
                  variant="contained"
                  color="secondary"
                  ref={anchorRef}
                  aria-label="split button"
                >
                  <Button onClick={handleClick}>
                    {options[selectedIndex]}
                  </Button>
                  <Button
                    color="secondary"
                    size="small"
                    aria-controls={open ? "split-button-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList id="split-button-menu">
                            {options.map((option, index) => (
                              <MenuItem
                                key={index}
                                // key={option}
                                disabled={index === 0}
                                selected={index === selectedIndex}
                                onClick={(event) =>
                                  handleMenuItemClick(event, index)
                                }
                              >
                                {option}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
                {/* <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<DashboardIcon />}
                >
                  Front Desk
                </Button> */}
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<ContactMailIcon />}
                  href="./userlist"
                >
                  Contact List
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<BallotIcon />}
                  href="./task"
                >
                  Task
                </Button>
              </Grid>
            </Grid>
            {/* ---------------------------Menu----------------------------------*/}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountBox />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
}
