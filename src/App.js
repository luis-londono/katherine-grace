import React, { useState } from "react";
import "./styles/App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { AppContext } from "./AppContext";

const App = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <div className="App">
      <AppContext.Provider value={[navigationOpen, setNavigationOpen]}>
        <Header />
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
