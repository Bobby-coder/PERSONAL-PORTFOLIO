import './Blog.css'

const Blog = ({imgSrc, title, liveLink, hashnodeLink}) =>{
    return(
        <>
        <div className="blog">
        
        <div className="screenshot">
          <img src={imgSrc} alt="blog" />
        </div>

        <div className="title">
          <p>{title}</p>
        </div>

        <div className="live-link">
          <a href={liveLink} target="_blank">
            READ BLOG
          </a>
        </div>

        <div className="hashnode-link">
          <a
            href= {hashnodeLink}
            target="_blank"
          >
            <img
              className="hashnode-icon"
              src="/images/hashnode.svg"
              alt="hashnode-icon"
            />
          </a>
        </div>

      </div>
        </>
    )
}

export default Blog;