import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import classNames from "classnames/bind";

import video from "../../assets/video/video2.mp4";
import styles from './Login.scss';

const cx = classNames.bind(styles);
function Login() {
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [validationMsg, setValidationMsg] = useState('');

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
    }

    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const validateAll = () => {
        const msg = {};
        if(isEmpty(email)) {
            msg.email = "Please input your Email";
        } else if (!isEmail(email)) {
            msg.email = "Your email is incorrect";
        }

        if(isEmpty(password)) {
            msg.password = "Please input your Password";
        }

        setValidationMsg(msg);
        if(Object.keys(msg).length > 0) return false;
        return true;
    }

    const onSubmitLogin = () => {
        const isValid = validateAll();
        if(isValid) {
            setLogin(true);
        }
    }


    if (login) {
        return <Navigate to="/" />
    }

    return (
        <div className={cx("Login-wrapper")}>
            <video src={video} muted autoPlay loop type="video/mp4" />
            <div className={cx("login-content")}>
                <div className="bt-form-login-simple-1">
                    <h1 className="form-heading">
                        Welcome Back, HoYoTab
                    </h1>
                    <div className="text-wrap">
                        <div className="text-line"></div>
                        <p className="text">or</p>
                        <div className="text-line"></div>
                    </div>
                    <form className="form" autoComplete="off">
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="username"
                                placeholder="Email"
                                className="form-input"
                                onChange={onChangeEmail}
                            />
                            <p className="validate-text">{validationMsg.email}</p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password*</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                placeholder="Password"
                                className="form-input"
                                onChange={onChangePassword}
                            />
                            <p className="validate-text">{validationMsg.password}</p>
                        </div>
                        <div className="form-meta">
                            <div className="form-remember">
                                <input
                                    type="checkbox"
                                    name="remember-account"
                                    id="remember-account"
                                />
                                <label htmlFor="remember-account">
                                    Remember for 30 days
                                </label>
                            </div>
                            <Link to="#" className="form-link">
                                Forgot Password
                            </Link>
                        </div>
                        <button type="button" className="form-btn" onClick={onSubmitLogin}>
                            Login
                        </button>
                    </form>
                    <div className="form-option">
                        Dont&#x27;t have am account?
                        <Link to="#">Sign up for free</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;