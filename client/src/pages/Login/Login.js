import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // handleChange
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(formData, navigate));
  };

  return (
    <div className='body'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <form className='box' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p className='text-muted'>
                  {" "}
                  Please enter your login and password!
                </p>
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  onChange={handleChange}
                />
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={handleChange}
                />
                {/* <a className="forgot text-muted" >Forgot password?</a> */}
                <input type='submit' defaultValue='Submit' />
                <div className='col-md-12'>
                  <ul className='social-network social-circle'>
                    <li>
                      <a
                        href='www.facebook.com'
                        className='icoFacebook'
                        title='Facebook'
                      >
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='www.twitter.com'
                        className='icoTwitter'
                        title='Twitter'
                      >
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a
                        href='www.google.com'
                        className='icoGoogle'
                        title='Google +'
                      >
                        <i className='fab fa-google-plus' />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
