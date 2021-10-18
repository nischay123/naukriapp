import React, { useState } from 'react'
import Blackspace from '../../components/blackspace/Blackspace'
import style from './PostJob.module.css'
import Button from '../../components/Button/Button'
import { checkLength } from '../../common/Commonfunction'
import { LoginApi, PostData } from '../../apis/Api'
import { withRouter } from 'react-router'
const PostJob = (props) => {

    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
   const [postDate, setPostDate] = useState(null);


    const PostNewPost =  async (e) => {
        e.preventDefault();
        if (checkLength(description) && checkLength(location) && checkLength(name)) {
            const token   = JSON.parse(localStorage.getItem('user')).data.token;
             let res=   await PostData(token , name, description, location);
             alert('You have added a Job');
             props.history.push('/dashboard')
             console.log(res.data)
        } else {
            setError(true)
        }
    }

    return (
        <React.Fragment>
            <Blackspace />
            <div className={style.login}>
                <div className={style.LoginTitle}>
                    Post a Job
                </div >

                <div className={style.inputContainer}>
                    <div>
                        <label for="jobpost">Post a Job*</label>
                    </div>
                    <input
                        style={{ borderColor: error === true ? 'red' : 'gray' }}
                        type="text"
                        id="jobpost"
                        name="jobpost"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter job title" />
                </div>
                <div className={style.inputContainer}>
                    <div>
                        <label for="description">Description*</label>
                    </div>
                    <textarea
                        style={{ borderColor: error === true ? 'red' : 'gray' }}
                        type="textarea"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter job description" />
                </div>
                <div className={style.inputContainer}>
                    <div>
                        <label for="location">Location*</label>
                    </div>
                    <input type="text"
                        style={{ borderColor: error === true ? 'red' : 'gray' }}
                        name="location"
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location" />
                </div>
                {error && <p className={style.error}>All fields are mandatory. </p>}

                <div className={["center", "mg-b-2rem"].join(" ")}>
                    <Button
                        handleClick={(e) => PostNewPost(e)}
                        content="post"
                        color="#FFFFFF"
                        paddingX='2.3rem'
                        backGroundColor='#43AFFF'
                        padding='.5rem' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(PostJob);