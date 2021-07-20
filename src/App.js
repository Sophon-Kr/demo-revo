import "./App.css";
import Navbar from "./components/Navbar";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import ForgotPass from "./views/ForgotPass";
import Home from "./views/Home";
import Profile from "./views/Profile";
import UserList from "./views/UserList";
import AddUser from "./views/AddUser";
import EditUser from "./views/EditUser";
import Task from "./views/Task";
import ErrorPage from "./views/ErrorPage";
import reducer from "./middleware/reducer";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgotpassword" component={ForgotPass} />
            <Route exact path="/edit/:id" component={EditUser} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/userlist" component={UserList} />
            <Route exact path="/task" component={Task} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
