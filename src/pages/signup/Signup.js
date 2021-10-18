import React, { useState ,useEffect} from 'react'
import Blackspace from '../../components/blackspace/Blackspace'
import style from './Signup.module.css'
import Button from '../../components/Button/Button'
import {
    checkEmail,
    checkLength,
    checkPassword,
    compareStrings
} from '../../common/Commonfunction'
import { SignUpApi } from '../../apis/Api'
import { Link, withRouter } from "react-router-dom";


const Signup = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [showFullNameError, setShowFullNameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [errorSignal, setErrorSignal] = useState(false);
    const [skills, setSkills] = useState('');
    const [role, setRole] = useState(0);


    const handleClick = async (e) => {
        e.preventDefault();
        console.log(email, password, role, confirmPassword, fullName, skills)

        if (checkEmail(email) && checkPassword(password) && checkLength(fullName) && compareStrings(password, confirmPassword)) {
            const res = await SignUpApi(email, password, role, confirmPassword, fullName, skills);
            await localStorage.setItem('user', JSON.stringify(res.data));
            props.history.push('/dashboard');
        } else {
            if(!checkEmail(email)){
                setShowEmailError(true);
            }
            if(!checkPassword(email)){
                setShowPasswordError(true);
            }
            if(!(checkLength(fullName) && compareStrings(password, confirmPassword))){
                setShowFullNameError(true)
            }
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
                    Signup
                </div>

                <div>
                    <p>I’m a*</p>
                    <div className="">
                        <div
                            className={style.button_radio}
                            onClick={() => setRole(0)}
                            style={
                                { backgroundColor: role === 0 ? '#43afff' : '#fff', color: role === 0 ? '#fff' : '#303f36' }} >
                            Recruiter
                        </div>
                        <div
                            className={[style.button_radio, 'mg-l-1'].join(" ")}
                            onClick={() => setRole(1)}
                            style={
                                { backgroundColor: role === 1 ? '#43afff' : '#fff', color: role === 1 ? '#fff' : '#303f36' }} >
                            Candidate
                        </div>
                    </div>
                </div>

                <div className={style.inputContainer}>
                    <div>
                        <label htmlFor="fullname">Full Name</label>
                    </div>
                    <input
                        style={{ borderColor: showFullNameError == true ? '#ff0000' : '' }}
                        type="text"
                        name="fullname"
                        placeholder="Enter your full name"
                        onChange={(e) => setFullName(e.target.value)} />
                </div>

                {showFullNameError && (
                    <p className={style.red_error}>
                        <small>This field is mandatory.</small>
                    </p>
                )}

                <div className={style.inputContainer}>
                    <div>
                        <label htmlFor="email">Email</label>
                    </div>
                    <input
                        style={{ borderColor: showEmailError == true ? '#ff0000' : '' }}
                        type="email"
                        name="email"
                        placeholder="mail@email.com"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                {showEmailError && (
                    <p className={style.red_error}>
                        <small>Invalid email address.</small>
                    </p>
                )}

                <div className={style.flex_container}>

              
                <div className={[style.inputContainer  ,style.widthhalf].join(" ")}>
                    <div>
                        <label htmlFor="password">Create Password</label>
                    </div>
                    <input
                        style={{ borderColor: showPasswordError == true ? '#ff0000' : '' }}
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className={[style.inputContainer  ,style.widthhalf].join(" ")}>
                    <div>
                        <label htmlFor="password">Confirm Password</label>
                    </div>
                    <input
                        style={{ borderColor: showPasswordError == true ? '#ff0000' : '' }}
                        type="password"
                        name="confirmpassword"
                        placeholder="Enter your password"
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                </div>

                {showPasswordError && (
                    <p className={style.red_error}>
                        <small>This field is mandatory.</small>
                    </p>
                )}


                <div className={style.inputContainer}>
                    <div>
                        <label htmlFor="fullname">Skills</label>
                    </div>
                    <input
                        type="text"
                        name="skills"
                        placeholder="Enter comma separated skills"
                        onChange={(e) => setSkills(e.target.value)} />

                </div>
                <div className={["center", "mg-b-2rem"].join(" ")}>
                    <Button
                        handleClick={(e) => handleClick(e)}
                        content="Signup"
                        color="#FFFFFF"
                        paddingX='2.3rem'
                        backGroundColor='#43AFFF'
                        padding='.5rem' />
                </div>

                <div className={["text-center"].join(" ")}>
                    <p>Have an account?<Link to='/login' style={{textDecoration:'none'}}> <span className={style.link_text}>
                        Login
                    </span>
                    </Link>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Signup)