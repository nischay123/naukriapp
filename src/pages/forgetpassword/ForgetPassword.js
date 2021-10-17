import React, { useState } from 'react'
import Blackspace from '../../components/blackspace/Blackspace'
import style from './ForgetPassword.module.css'
import Button from '../../components/Button/Button'
import {
    checkEmail,
} from '../../common/Commonfunction'
import { GetResetPasswordToken, VerifyPasswordToken } from '../../apis/Api';
import { Link, withRouter } from "react-router-dom";



const ForgetPassword = (props) => {

    const verifyToken = async () => {
        const token = localStorage.getItem('token');
        const res = await VerifyPasswordToken(token);
        return res.data.success
    }

    const [error, setError] = useState(false)
    const handleForgetSubmit = async (e) => {
        e.preventDefault();
        if (checkEmail(email)) {
            const res = await GetResetPasswordToken(email);
            await localStorage.setItem('token', res.data.data.token);
             
            if (localStorage.getItem('token') !== null) {
                const isValidUser = await verifyToken();
                console.log(isValidUser,"line 28")
                if(isValidUser){
                    console.log("hellllllo")
                      props.history.push('/reset-password')
                }else{
                    setError(true)
                }
            }
        }else{
            setError(true)
        }

    }
    const [email, setEmail] = useState('');
    return (
        <React.Fragment>
            <Blackspace />
            <div className={style.login}>
                <div className={style.LoginTitle}>
                    Forgot your password?
                </div >
                <p className={style.para}>
                    Enter the email associated with your account and we’ll send you instructions to reset your password.
                </p>
                <div className={style.inputContainer}>
                    <div>
                        <label for="email">Email</label>
                    </div>
                    <input type="email" id="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                {error && <p className={style.red_error}>
                    <small>Email is wrong or you must register!</small>
                </p>}

                <div className={["center", "mg-b-2rem"].join(" ")}>
                    <Button
                        handleClick={handleForgetSubmit}
                        content="submit"
                        color="#FFFFFF"
                        paddingX='2.3rem'
                        backGroundColor='#43AFFF'
                        padding='.5rem' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(ForgetPassword)