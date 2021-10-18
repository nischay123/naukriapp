import React, { useState, useEffect } from 'react';
import ApplicationCard from '../../components/applicantscards/ApplicationCard';
import Backdrop from '../../components/popup/Backdrop';
import style from './Dashboard.module.css';
import { withRouter } from 'react-router';
import chevron from '../../assets/chevron.png'
import JobCard from '../../components/card/JobCard';
import { paginationHandle } from '../../common/Commonfunction';
import Button from '../../components/Button/Button';
import { GetAllJobs, GetOneJobCandidates } from '../../apis/Api';

const Dashboard = (props) => {
    const [toggleBackdrop, setToggleBackdrop] = useState(false)
    const [applicants, setapplicants] = useState([]);
    const [currentNumber, setCurrentNumber] = useState(1);
    const [applicantPageNumber, setApplicantPageNumber] = useState(1);
    const [data, setdata] = useState([])

    const handleViewApplicant = (jobid) => {
        const getApplicants = async (jobid) => {
            const token = JSON.parse(localStorage.getItem('user')).data.token
            const res = await GetOneJobCandidates(token, jobid);
            setapplicants(res.data.data)
          
        }
        getApplicants(jobid);
    }

    useEffect(() => {
        const getData = async () => {
            const token = JSON.parse(localStorage.getItem('user')).data.token
            const res = await GetAllJobs(token);
            console.log("line 50", res?.data?.data?.data)
            if(res?.data?.data?.data !== undefined){
                setdata([...res?.data?.data?.data])
            }
        }
        if(localStorage.getItem('user') ===  null){
            props.history.push('/');
        }else{
            getData();
        }
    }, [])

    const windowItems = 4;
    const lastIndex = windowItems * (currentNumber);
    const firstIndex = windowItems * (currentNumber - 1);
    const windowCards = data.slice(firstIndex, lastIndex);
    const pagelastIndex = windowItems * (applicantPageNumber);
    const pagefirstIndex = windowItems * (applicantPageNumber - 1);
    const pagewindowCards = applicants!== undefined?  applicants.slice(pagefirstIndex, pagelastIndex): [];

    return (

        <div className={style.dashboard_container}>
            {console.log("data", data,)}
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
                            setapplicants={setapplicants}
                            jobid={job.id}
                            handleViewApplicant={handleViewApplicant}
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
                        padding='.5rem' />                    
                        
                    </div>
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
            {
            toggleBackdrop && <Backdrop
                toggleBackdrop={toggleBackdrop}
                setToggleBackdrop={setToggleBackdrop}
            >
                <div className={style.subtitle}>
                    Total {applicants !== undefined ? applicants.length : '0'} applications
                </div>
                <div className={style.applicants_cards_container}>

                    {applicants !== undefined && <div className={style.application_container}>

                        {
                            pagewindowCards.map((applicant, index) => {
                                return <ApplicationCard
                                    key={applicant.id}
                                    email={applicant.email}
                                    name={applicant.name}
                                    skills={applicant.skills}
                                />
                            })
                        }
                    </div>}
                    {applicants === undefined && <div className="center">
                        <div className={style.fileicon}>  <i class="fa fa-file"></i>
                            <p>No applications available!</p>
                        </div>
                    </div>}


                </div>
                <div className={style.pagination_number}>
                    <div className={style.back}
                        onClick={() => {
                            const result = paginationHandle(applicants.length, 4, 0, applicantPageNumber);
                            setApplicantPageNumber(result);
                        }
                        }>back</div>
                    <div className={style.number}>{applicantPageNumber} </div>
                    <div className={style.next}
                        onClick={() => {
                            const result = paginationHandle(applicants.length, 4, 1, applicantPageNumber);
                            setApplicantPageNumber(result);
                        }}
                    >next</div>
                </div>
            </Backdrop>
            }
        </div>
    )
}
export default withRouter(Dashboard)
