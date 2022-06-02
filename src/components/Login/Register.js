import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";


import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { register } from "../../actions/auth";
import './login.scss';
import loginbanner from '../../images/bg1.jpg';
import { Link ,Redirect } from 'react-router-dom';


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeMobile = (e) => {
    const mobile = e.target.value;
    setMobile(mobile);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(name,username,email,mobile, password))
        .then(() => {
          props.history.push("/login");
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  


  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <section>
        <div className="imgBox">
            <img src={loginbanner} />
        </div>
        <div className="contentBx">
            <div className="formBx regformBx">
                <h2>Signup</h2>
          <Form onSubmit={handleSignup} ref={form}>
            
          <div className="inputBx">
                        <span>Name</span>
                            <Input
                            type="text"
                            className="form-control"
                            name="name"
                            value={name}
                            onChange={onChangeName}
                            validations={[required]}
                          />
            </div>

                    <div className="inputBx">
                        <span>Username</span>
                            <Input
                            type="text"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                          />
            </div>
            
            <div className="inputBx">
                        <span>Email</span>
                            <Input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required]}
                          />
            </div>
            

            <div className="inputBx">
                        <span>Mobile</span>
                            <Input
                type="tel"
                minLength="10"
                maxLength="10"
                            className="form-control"
                            name="mobile"
                            value={mobile}
                            onChange={onChangeMobile}
                            validations={[required]}
                          />
                    </div>

                    <div className="inputBx">
                        <span>Password</span>
                              <Input
                              type="password"
                              className="form-control"
                              name="password"
                              value={password}
                              onChange={onChangePassword}
                              validations={[required]}
                            />
                    </div>
                    <div className="remember">
                        <label>
                            
                        </label>
                    </div>
                    <div className="inputBx">
              
                          <button className="loginbtn" disabled={loading}>
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>Signup</span>
                        </button>
            </div>
            
            <div className="inputBx">
                        <p>Have an account <Link to="/login"><a>Login</a></Link></p>
            </div>
            {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </Form>

                
            </div>
        </div>
    </section>
  );
};

export default Register;