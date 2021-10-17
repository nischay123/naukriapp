import React from 'react'
import style  from './Backdrop.module.css';

const Backdrop = (props) => {

    const {setToggleBackdrop , toggleBackdrop}  = props;
    return (
        <React.Fragment>
            <div className={style.popup_container}>
                <div className={style.inner}>
                       <div className={style.header}>
                           <div className={style.title}>
                           Applicants for this job
                           </div>
                           <div className={style.closeButton} onClick={()=>setToggleBackdrop(!toggleBackdrop)}>
                                <i class="fa fa-close"></i>
                           </div>
                       </div>
                       {props.children}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Backdrop;