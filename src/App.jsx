import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Layout/header/Header";
import Main from "./Layout/main/Main";
import "../src/index.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Main />
        <Routes>
          <Route></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
