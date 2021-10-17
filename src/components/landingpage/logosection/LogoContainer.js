import React from 'react'
import goldline from '../../../assets/goldline.jpeg';
import ideaa from '../../../assets/ideaa.jpeg';
import lightai from '../../../assets/lightai.png';
import Liva from '../../../assets/Liva.png';
import ztos from '../../../assets/ztos.png';
// import goldline from '../../../assets/goldline.jpeg';

import style from './Logo.module.css';

export default function LogoContainer() {
    return (
        <section className={style.logo_container}>
            <img src={goldline} />
            <img src={ideaa} />
            <img src={lightai} />
            <img src={Liva} />
            <img src={ztos} />
            
        </section>
    )
}
