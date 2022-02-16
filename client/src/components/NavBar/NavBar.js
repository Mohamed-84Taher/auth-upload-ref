import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";

import "./NavBar.css";

function NavBar() {
  const isAuth = useSelector(state => state.authReducer.isAuth);

  const dispatch = useDispatch();
  return (
    <div className='nav-bar'>
      <Link to='/'>
        <h2>Authentification</h2>
      </Link>

      {isAuth ? (
        <div className='nav-list'>
          <h4 className='logout' onClick={() => dispatch(logout())}>
            Logout
          </h4>
          <Link to='/profile'>
            <h4>Profile</h4>
          </Link>
          <Link to='/posts'>
            <h4>Posts</h4>
          </Link>
        </div>
      ) : (
        <div className='nav-list'>
          <Link to='/login'>
            <h4>Login</h4>
          </Link>
          <Link to='/register'>
            <h4>Register</h4>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
