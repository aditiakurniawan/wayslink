import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import DataLink from "./pages/DataLink";
import Template from "./pages/Template";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";
import CreateLink from "./pages/CreateLink";
import UpdateLink from "./pages/UpdateLink";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/datalink" element={<DataLink />} />
        <Route path="/create_link" element={<CreateLink />} />
        <Route path="/Update_link/:id" element={<UpdateLink />} />
        <Route path="/result/:id" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
