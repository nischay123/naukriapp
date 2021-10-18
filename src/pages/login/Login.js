import React, { useState ,useEffect } from 'react'
import Blackspace from '../../components/blackspace/Blackspace'
import style from './Login.module.css'
import Button from '../../components/Button/Button'
import {
    checkEmail,
    checkPassword
} from '../../common/Commonfunction'
import { LoginApi } from '../../apis/Api'
import { Link, withRouter } from "react-router-dom";


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorSignal, setErrorSignal] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        if (checkEmail(email) && checkPassword(password)) {
            const res = await LoginApi(email, password);
            await localStorage.setItem('user', JSON.stringify(res.data));
            props.history.push('/dashboard');
        } else {
            setErrorSignal(true)
        }
    }

    useEffect(() => {
        if(localStorage.getItem('user')){
            props.history.push('/dashboard');
        }
    }, [])

    return (
        <React.Fragment>
            <Blackspace />
            <div className={style.login}>
                <div className={style.LoginTitle}>
                    Login
                </div>
                <div className={style.inputContainer} >
                    <div>
                        <label htmlFor="email">Email</label>
                    </div>
                    <input
                        style={{ borderColor: errorSignal == true ? '#ff0000' : '' }}
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.inputContainer}>
                    <Link to="/forget-password">
                        <div className={style.link_to_forget}>
                            Forgot your password?
                        </div>
                    </Link>
                    <div>
                        <label htmlFor="password">Password</label>
                    </div>

                    <input
                        style={{ borderColor: errorSignal == true ? '#ff0000' : '' }}
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                {errorSignal && <p className={style.red_error}>
                    <small>This field is mandatory.</small>
                </p>}
                <div className={["center", "mg-b-2rem"].join(" ")}>
                    <Button
                        handleClick={(e) => handleClick(e)}
                        content="login"
                        color="#FFFFFF"
                        paddingX='2.3rem'
                        backGroundColor='#43AFFF'
                        padding='.5rem' />
                </div>

                <div className={["text-center"].join(" ")}>
                    <p>New to MyJobs? <span className={style.link_text}>
                        <Link to="/register" style={{ textDecoration: 'none' , color:'#43AFFF' }}> Create an account</Link>
                    </span>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Login)