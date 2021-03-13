import React, { useContext } from "react";
import App from "./App";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reviewReducer from "./reducers/reviewReducer";
import allReducers from "./reducers/";
import { composeWithDevTools } from "redux-devtools-extension";
import Sidebar from "./components/sidebar/sideBar";

// import "./assets/main.css";
// import "./tailwind.output.css";

const store = createStore(allReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
