import "../styles/home/HomePage.css";
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-container-heading">
          <h1>BOBBY SADHWANI</h1>
        </div>

        <div className="home-container-info">
          <p>
            I'm a front-end developer focused on crafting clean and user
            friendly experiences. I designed my portfolio in clean and simple
            style so nothing can distract you to see my work.
          </p>
        </div>

        <div className="home-container-btn">
          <Link to = '/work'><button>check my work</button></Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
