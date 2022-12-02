import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import BlogPage from "./pages/BlogPage";
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
                <HomePage />
              </>
            }
          />
          <Route
            path="blog"
            element={
              <>
                <Header />
                <BlogPage />
              </>
            }
          />
          <Route
            path="work"
            element={
              <>
                <Header />
                <WorkPage />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
