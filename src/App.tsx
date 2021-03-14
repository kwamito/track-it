import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Sidebar from "./components/sidebar/sideBar";
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
import LineGraph from "./components/graphbox/charts";
import Documentation from "./components/docPage/projectDoc";
import ContributorsList from "./components/contributors/contributorsList";
import AllTeams from "./components/team_card/allTeams";
import AcceptProject from "./components/projects_home/acceptProject";
import CreateProject from "./components/projects_home/createProject";
import AllExpenses from "./components/projects_home/allExpenses";
import TeamDetail from "./components/team_card/teamDetail";
import BudgetHistory from "./components/projects_home/budgetHistory";
import Features from "./components/projects_home/allFeatures";
import CreateExpense from "./components/projects_home/createExpense";
import CreateFeature from "./components/projects_home/createFeature";

function App() {
  return (
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
        <Route path="/graph" component={LineGraph} exact />
        <Route path="/docs/:id" component={Documentation} exact />
        <Route path="/contributors/:id" component={ContributorsList} exact />
        <Route path="/teams/:id" component={AllTeams} exact />
        <Route path="/accept/:id" component={AcceptProject} exact />
        <Route path="/create" component={CreateProject} exact />
        <Route path="/expenses/:id" component={AllExpenses} exact />
        <Route path="/team/:project_id/:team_id" component={TeamDetail} exact />
        <Route path="/budget_history/:project_id" component={BudgetHistory} />
        <Route
          path="/features/:project_id"
          name={"features"}
          component={Features}
          exact
        />
      </Switch>
      <Route path="/create-expense/:id" component={CreateExpense} exact />
      <Route path="/create-feature/:id" component={CreateFeature} exact />
    </Router>
  );
}

export default App;
