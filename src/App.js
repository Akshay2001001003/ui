import "./App.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Landing from "./Components/landing/Landing";
import Second from "./Components/second/Second";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AddNew from "./Pages/AddNew";
function App() {
  return (
    <div>
      <Landing />
      <BrowserRouter>
        <Second />
        <Routes>
          <Route path="./add" element={<AddNew />} />
        </Routes>
        <Page1 />
        <Page2 />
      </BrowserRouter>
    </div>
  );
}

export default App;
