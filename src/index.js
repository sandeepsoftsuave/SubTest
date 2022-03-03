import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SubApp from './SubApp'
import { Provider } from "react-redux";
import 'antd/dist/antd.min.css';
import store from "./store";

function ConfiguredApp() {
  return (
    <Provider store={store}>
      <SubApp />
    </Provider>
  );
}

export default ConfiguredApp;

ReactDOM.render(<ConfiguredApp />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
