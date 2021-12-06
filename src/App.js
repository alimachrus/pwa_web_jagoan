import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Responsive from "./components/Responsive";
import Install from "./components/Install";
import Local from "./components/Local";
import Notif from "./components/Notif";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <h1>Welcome to React Router!</h1> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/responsive" element={<Responsive />} />
          <Route path="/install" element={<Install />} />
          <Route path="/local" element={<Local />} />
          <Route path="/notif" element={<Notif />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
