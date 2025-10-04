import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import "./css/app.css";
import PostHogPageviewTracker from "./components/PostHogPageviewTracker";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <PostHogPageviewTracker />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
