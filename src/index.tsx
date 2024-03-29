import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "normalize.css";
import "src/assets/styles/index.less";

import store from "src/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
