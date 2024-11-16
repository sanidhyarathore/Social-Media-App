import { useContext } from "react";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/')
    };

    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>This is a opening paragraph and it's a decsription og login page</p>
                    <span>Don't you have an account</span>
                    <Link to="/Register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form >
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login