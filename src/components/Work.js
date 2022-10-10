import './Work.css';
import Project from './Project';
import projectApi from './projectApi';

const Work = () =>{
    return(
        <>gi
        <div className='work-container'>
        {
            projectApi.map(currObj =>{
                return <Project title={currObj.title} liveLink={currObj.liveLink} githubLink={currObj.githubLink} imgSrc = {currObj.imgSrc}/>
            })
        }
        </div>
        </>
    )
}

export default Work;