import "./Project.css";

const Project = ({title, liveLink, githubLink, imgSrc}) => {
  return (
    <>
      <div className="project-wrapper">
        
        <div className="screenshot">
          <img src={imgSrc} alt="project-1" />
        </div>

        <div className="title">
          <p>{title}</p>
        </div>

        <div className="live-link">
          <a href={liveLink} target="_blank">
            LIVE SITE
          </a>
        </div>

        <div className="github-link">
          <a
            href= {githubLink}
            target="_blank"
          >
            <img
              className="git-icon"
              src="/images/github-white.svg"
              alt="github-icon"
            />
          </a>
        </div>

      </div>
    </>
  );
};

export default Project;
