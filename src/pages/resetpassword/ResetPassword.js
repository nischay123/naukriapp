import React, { useState } from 'react'
import Blackspace from '../../components/blackspace/Blackspace'
import style from './ResetPassword.module.css'
import Button from '../../components/Button/Button';
import {
    checkEmail,
    checkLength,
    checkPassword,
    compareStrings
} from '../../common/Commonfunction'
import { SignUpApi, ChangePassword } from '../../apis/Api'
import { Link, withRouter } from "react-router-dom";

const ResetPassword = (props) => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetButton = async (e) => {
        e.preventDefault();
        console.log(compareStrings(password, confirmPassword), checkPassword(password), checkPassword(confirmPassword));
        if (checkPassword(password) && checkPassword(confirmPassword) && compareStrings(password, confirmPassword)) {
            await ChangePassword(localStorage.getItem('token'), password, confirmPassword);
            props.history.push('/login');
        } else {
            console.log("ssdfgsdf");
        }
    }
    return (
        <React.Fragment>
            <Blackspace />
            <div className={style.login}>
                <div className={style.LoginTitle}>
                    Reset Your Password
                </div >
                <p className={style.para}>
                    Enter your new password below.
                </p>
                <div className={style.inputContainer}>
                    <div>
                        <label for="password">Password</label>
                    </div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={style.inputContainer}>
                    <div>
                        <label for="newpassword">New Password</label>
                    </div>
                    <input
                        type="newpassword"
                        id="newpassword"
                        name="newpassword"
                        placeholder="New Password"
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className={["center", "mg-b-2rem"].join(" ")}>
                    <Button
                        handleClick={handleResetButton}
                        content="reset"
                        color="#FFFFFF"
                        paddingX='2.3rem'
                        backGroundColor='#43AFFF'
                        padding='.5rem' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(ResetPassword)