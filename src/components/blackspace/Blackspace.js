import React from 'react'
import { withRouter } from 'react-router'
import style from './Blackspace.module.css'


const Blackspace = (props) => {
    console.log(typeof (props.history.location.pathname), "line 7");

    let navigation_name = props.history.location.pathname == '/post-job' ? ' Post a Job' : '';

    return (
        <div className={style.blackspace}>
            <div className={style.home_navigator}>
                {/* <i class={["fa fa-home",style.icon_home].join(" ")} ></i> */}
            
               

            </div>

        </div>
    )
}

export default withRouter(Blackspace);