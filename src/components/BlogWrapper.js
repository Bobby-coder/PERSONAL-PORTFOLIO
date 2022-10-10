import Blog from './Blog'
import './BlogWrapper.css'
import blogApi from './blogApi'

const BlogWrapper = () =>{
    return(
        <>
        <div className='blog-wrapper'>
        {
            blogApi.map((currObj) => {
                return <Blog title = {currObj.title} liveLink = {currObj.liveLink} hashnodeLink = {currObj.hashnodeLink} imgSrc = {currObj.imgSrc} />
            })
        }
        </div>
        </>
    )
}

export default BlogWrapper;