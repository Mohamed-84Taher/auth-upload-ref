import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  const loading = useSelector(state => state.authReducer.loading);
  const isAuth = useSelector(state => state.authReducer.isAuth);
  return (
    <>
      {loading ? (
        <h2>wait....</h2>
      ) : token && isAuth ? (
        children
      ) : (
        <Navigate to='/login' />
      )}
    </>
  );
}
export default PrivateRoute;
