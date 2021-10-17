import React from 'react'

 const Button = ({handleClick , content , backGroundColor , color,padding ,paddingX})=> {
    const mystyle = {
        color: color,
        backgroundColor: backGroundColor,
        padding: padding +" "+ paddingX,
        fontFamily: "Arial",
        border: '1px solid #43AFFF',
        borderRadius : '5px',
        opacity: 1  ,
        textTransform : "capitalize"  ,
        cursor: 'pointer'  
      };
    return (
        <React.Fragment>
            <button 
            onClick={handleClick}
            style={mystyle}>{content}</button>
        </React.Fragment>
    )
}
export default Button