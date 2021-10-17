import React from 'react';
import style from './Card.module.css'

const ApplicationCard = (props) => {
    return (
        <div className={style.applicant_card}>
            <div className={style.applicant_profile}>
                <div className={style.avatar}>
                    {/* {name.split("")[0]} */}
                    A
                </div>
                <div className={style.details}>
                    <p className={style.name}>
                        {/* {name} */}
                        name
                    </p>
                    <p className={style.email}>
                        {/* {email} */}
                        email
                    </p>
                </div>
            </div>
            <p className={style.title}>
                Skills
            </p>
            <p className={style.skill}>
                {/* {skills} */}
                html css
            </p>
        </div>
    );

}

export default ApplicationCard