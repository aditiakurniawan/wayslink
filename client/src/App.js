import "./App.css";
import {
  Routes,
  Route,
  useNavigate,
  Redirect,
  useParams,
  Navigate,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { API, setAuthToken } from "./config/api";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import DataLink from "./pages/DataLink";
import Template from "./pages/Template";
import Result from "./pages/Result";
import ResultA from "./pages/ResultA";
import ResultB from "./pages/ResultB";
import ResultC from "./pages/ResultC";
import NotFound from "./pages/NotFound";
import CreateLink from "./pages/CreateLink";
import UpdateLink from "./pages/UpdateLink";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  // console.log(state);
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/template/:id" element={<Template />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/datalink" element={<DataLink />} />
        <Route path="/create_link" element={<CreateLink />} />
        <Route path="/Update_link/:id" element={<UpdateLink />} />
        <Route path="/result/:id" element={<Result />} />
        <Route path="/resultA/:id" element={<ResultA />} />
        <Route path="/resultB/:id" element={<ResultB />} />
        <Route path="/resultC/:id" element={<ResultC />} />
      </Routes>
    </>
  );
}

export default App;
