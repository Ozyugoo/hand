import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Layout/Page.jsx";
import "../src/index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
