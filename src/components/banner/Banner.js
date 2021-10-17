import React from 'react'
import Button from '../Button/Button';
import style from './Banner.module.css'
import bannerImage from '../../assets/banner-image.jpg'

const Banner = (props) => {
    return (
        <React.Fragment>
            <div className={style.wrapper}>
            <div className={style.banner_container}>
                <div className={style["banner_header"]}>
                    <div className={style.banner_heading}>
                        Welcome to 
                        <p className={style.heading_logo}> My<span>Jobs</span> </p>
                    </div>
                    <Button 
                    content="get started" 
                    backGroundColor= '#43AFFF' 
                    color="#FFFFFF"
                    paddingX='2rem'
                    padding='.7rem' />
                </div>
                <div className={style.banner_image}>
                </div>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Banner;