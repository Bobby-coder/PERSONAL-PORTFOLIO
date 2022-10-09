import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="blog"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            path="work"
            element={
              <>
                <Header />
                <Work />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
