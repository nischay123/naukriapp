import React from 'react'

import style from './card.module.css';

 const  Card = ({header})=> {
    return (
        <div className={style.card}>
                <h3 className={style.card_title}>{header} </h3>
                <p className={style.card_description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
        </div>
    )
}

export default Card;