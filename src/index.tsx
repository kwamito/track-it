import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Sidebar from "./components/sidebar/sideBar";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ProjectsList from "./components/projects_home/projectsHome";
import Login from "./components/login_register/login";
import Register from "./components/login_register/register";
import Logout from "./components/login_register/logout";
import ProjectDetail from "./components/projects_home/projectDetail";
import TasksList from "./components/tasks/tasksList";
import UserHomePage from "./components/homepage/userHomepage";
import AddMemberModal from "./components/modals/addMember";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={ProjectsList} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} exact />
        <Route path="/project/:id" component={ProjectDetail} exact />
        <Route path="/project/:id/tasks" component={TasksList} exact />
        <Route path="/home" component={UserHomePage} exact />
        <Route path="/modal" component={AddMemberModal} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
