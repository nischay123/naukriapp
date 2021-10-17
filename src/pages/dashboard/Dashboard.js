import React, { useState, useEffect } from 'react';
import ApplicationCard from '../../components/applicantscards/ApplicationCard';
import Backdrop from '../../components/popup/Backdrop';
import style from './Dashboard.module.css';
import { withRouter } from 'react-router';
import chevron from '../../assets/chevron.png'
import JobCard from '../../components/card/JobCard';
import { paginationHandle } from '../../common/Commonfunction';
import Button from '../../components/Button/Button';

const Dashboard = (props) => {
    const [toggleBackdrop, setToggleBackdrop] = useState(false)
    const [applicants, setapplicants] = useState(null);




    const handleViewApplicant = () => {
        // ask for aplicants

    }
    console.log("dashborad", props);


    const data = [
        { title: 'hell0', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'Gurugram' },
        { title: 'hell1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'delhi' },
        { title: 'hell2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'alsdfs' },
        { title: 'hell3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'amar' },
        { title: 'hell4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'karnan' },
        { title: 'hell5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'alsdfs' },
        { title: 'hell6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'amar' },
        { title: 'hell7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'alsdfs' },
        { title: 'hell8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'amar' },
        { title: 'hell9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'alsdfs' },
        { title: 'hell10', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…', location: 'amar' },
    ]

    const windowItems = 4;
    const [currentNumber, setCurrentNumber] = useState(2);
    const lastIndex = windowItems * (currentNumber);
    const firstIndex = windowItems * (currentNumber - 1);
    const windowCards = data.slice(firstIndex, lastIndex);

    return (
        <div className={style.dashboard_container}>
            <div className={style.blackspace}>
                <div className={style.home_navigator}>
                    <i class={["fa fa-home", style.icon_home].join(" ")} ></i>
                    Home
                    <div className={style.title}>
                        Jobs posted by you
                    </div>
                </div>
            </div>

            <div className={style.post_container_gallery}>

                {
                    windowCards.map((job, index) => {
                        return <JobCard
                            setToggleBackdrop={() => setToggleBackdrop(!toggleBackdrop)}
                            toggleBackdrop={toggleBackdrop}
                            key={index}
                            description={job.description}
                            title={job.title}
                            location={job.location} />
                    })
                }

            </div>

            {data.length === 0 && <div className="center">
                <div className={style.fileicon}>  <i class="fa fa-file"></i>
                    <p>Your posted jobs will show here!</p>
                    <Button
                        handleClick={() => props.history.push('/post-job')}
                        content="Post a Job"
                        color="#FFFFFF"
                        paddingX='2.3rem'
                        backGroundColor='#43AFFF'
                        padding='.5rem' />                        </div>
            </div>}

            {data.length !== 0 && <div className={style.pagination_number}>
                <div className={style.back}
                    onClick={() => {
                        const result = paginationHandle(data.length, 4, 0, currentNumber);
                        setCurrentNumber(result);
                    }
                    }>back</div>
                <div className={style.number}>{currentNumber} </div>
                <div className={style.next}
                    onClick={() => {
                        const result = paginationHandle(data.length, 4, 1, currentNumber);
                        setCurrentNumber(result);
                    }}
                >next</div>
            </div>
            }


            {toggleBackdrop && <Backdrop
                toggleBackdrop={toggleBackdrop}
                setToggleBackdrop={setToggleBackdrop}
            >
                <div className={style.applicants_cards_container}>
                    <div className={style.application_container}>
                        <ApplicationCard />
                        <ApplicationCard />
                        <ApplicationCard />
                        <ApplicationCard /><ApplicationCard />
                        <ApplicationCard />
                        <ApplicationCard /><ApplicationCard />
                        <ApplicationCard />
                    </div>
                    {false && <div className="center">
                        <div className={style.fileicon}>  <i class="fa fa-file"></i>
                            <p>No applications available!</p>
                        </div>
                    </div>}
                </div>
            </Backdrop>
            }
        </div>
    )
}

export default withRouter(Dashboard)
