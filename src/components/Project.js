import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="project-wrapper">
        
        <div className="screenshot">
          <img src="/images/rode-clone.webp" alt="project-1" />
        </div>

        <div className="title">
          <p>RODE UI clone</p>
        </div>

        <div className="live-link">
          <a href="https://rode-web.netlify.app" target="_blank">
            LIVE SITE
          </a>
        </div>

        <div className="github-link">
          <a
            href="https://github.com/Bobby-coder/RODE-UI-CLONE"
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
