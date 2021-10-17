import React from 'react'
import Card from '../../card/Card';
import LogoContainer from '../logosection/LogoContainer';
// import Logo from '../../partnerlogocontainer/Logo';
import style from './WhyUsSection.module.css';

 const WhyUsSection = (props)=> {
     
    const section = [
        { heading: 'Get more visibility', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { heading: 'Organize your candidates', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temGet more visibilitypor incididunt.' },
        { heading: 'Verify their abilities', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
    ]

    return (
        <React.Fragment>
              <div style={{ width: '75%', margin: ' 0px auto ', backgroundColor: '#EDF6FF' }}>
                        <div className={style.section_heading}>
                            why us
                        </div>
                        <div className={style.cardContainer}>
                            {
                                section.map((ele, index) => {
                                    return <Card header={ele.heading} description={ele.description} />
                                })
                            }
                        </div>
                        {/* comapnay */}
                        <div className={style.company_logo_section}>
                            <div className={style.section_heading}>
                                companies who trust us
                            </div>
                            <LogoContainer />
                        </div>
                    </div>

        </React.Fragment>
    )
}
export default  WhyUsSection;