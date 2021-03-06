import React from 'react';
import style from './JobCard.module.css'

export default function JobCard({setapplicants,jobid,handleViewApplicant,setToggleBackdrop,toggleBackdrop , title,description, location}) {
    console.log("jobcard",jobid)
    return (
        <div className={style.card}>
                    <h3>
                        {/* UI UX Designer */}
                        {title}
                    </h3>
                    <p>
                        {description}
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntâ€¦ */}
                    </p>
                    <div className={style.card_Buttons}>
                        <div className={style.location_icon}>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div className={style.location}>
                            {location}
                        </div>
                        <div 
                        className={style.view_application} 
                        onClick={async () => {
                            await handleViewApplicant(jobid);
                            setToggleBackdrop(!toggleBackdrop)
                        }
                        } >
                            View applications
                        </div>
                    </div>
            </div>
    )
}
