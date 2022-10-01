import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Link from "./pages/Link";
import Template from "./pages/Template";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";
import CreateLink from "./pages/CreateLink";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/link" element={<Link />} />
        <Route path="/create_link" element={<CreateLink />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
