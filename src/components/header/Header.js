import React, { useState } from 'react';
import Button from '../Button/Button';
import style from './header.module.css';
import { Link } from "react-router-dom";
import DropArrow from '../icons/DownArrow';
import { withRouter } from "react-router-dom";

 const Header = (props)=> {

    const [toggleLogoutMsg, setToggleLogoutMsg] = useState(true)
    const logout =()=>{
        console.log(logout);
        props.history.push('/');
        localStorage.removeItem('user') ;
        setToggleLogoutMsg(!toggleLogoutMsg);
    }

    return (
        <React.Fragment>
            <header className={style.header}>
                <div className={style.heading_title}>
                    <div className={style.heading_logo}>
                        My<span>Jobs</span>
                    </div>

                    <div className={style.heading_right_info}>

                        {
                            localStorage.getItem('user') !== null &&
                            <Link to="/post-job">
                                <div className={style.postjobDiv}>
                                    Post a Job
                                </div>
                            </Link>
                        }
                        {localStorage.getItem('user') !== null && <> <div className={style.ProfileIcon} >
                            {JSON.parse(localStorage.getItem('user')).data.name[0]}
                        </div>
                            <div className={style.drop_icon}>
                                <DropArrow toggleHandler={() => setToggleLogoutMsg(!toggleLogoutMsg)} />
                            </div>
                           {toggleLogoutMsg && 
                           
                           <div className={style.logout_container} onClick={()=>logout(props.history)}>
                                    Logout
                                    <DropArrow  />
                            </div>
                            }
                        </>}

                        {localStorage.getItem('user') === null && <React.Fragment><Link to="/login">
                            <Button
                                handleClick={() => console.log("asdffsf")}
                                content="Login/Signup"
                                padding="10px"
                                backGroundColor='#43AFFF33'
                                color='#FFFFFF'
                                paddingX='1rem'
                            />
                        </Link>


                        </React.Fragment>
                        }
                    </div>

                </div>
                {/* <div className={style.header_content}>
                    <section>
                           
                    </section>
                </div> */}
            </header>
        </React.Fragment>
    )
}

export default withRouter(Header);