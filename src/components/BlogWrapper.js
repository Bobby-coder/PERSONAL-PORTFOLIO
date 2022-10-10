import Blog from './Blog'
import blogApi from './blogApi'

const BlogWrapper = () =>{
    return(
        <>
        {
            blogApi.map((currObj) => {
                return <Blog title = {currObj.title} liveLink = {currObj.liveLink} hashnodeLink = {currObj.hashnodeLink} imgSrc = {currObj.imgSrc} />
            })
        }
        </>
    )
}

export default BlogWrapper;