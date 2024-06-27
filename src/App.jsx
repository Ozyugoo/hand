import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Layout/Page.jsx";
import SuccessPage from "./components/mainPages/SuccessPage.jsx";
import "../src/index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
