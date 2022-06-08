import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { createStore } from "redux";

import rootReducer from "./modules";

import App from "./App";

import "./index.css";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
