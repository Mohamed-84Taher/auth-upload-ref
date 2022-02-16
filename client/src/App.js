import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LandPage from "./pages/LandPage/LandPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/404Page";
import PrivateRoute from "./router/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./redux/actions/authActions";
import Alert from "./components/alert/Alert";
import Posts from "./pages/Posts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Alert />
        <Routes>
          <Route path='/' element={<LandPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path='/posts'
            element={
              <PrivateRoute>
                <Posts />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
