import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
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

        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
