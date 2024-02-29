import React from "react";
import FontSwitcher from "./FontSwitcher";

import { ThemeProvider } from "./ThemeContext";

import Para from "./Para";
import MainContent from "./MainContent";
import Header from "./Header";

function App() {
  return (
    <ThemeProvider>
      <FontSwitcher>
        <div>
          <Header/>
          <MainContent/>
          <Para />
        </div>
      </FontSwitcher>
    </ThemeProvider>
  );
}

export default App;
