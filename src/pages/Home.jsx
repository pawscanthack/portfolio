import "../css/home.css";
import hero from "../img/profile-pic.jpg";
export const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          What do you want me to say? This is my super cool portfolio site that
          is built with React.
        </p>
        <hr />
        <p>Under Construction</p>
        <img src={hero} alt="Portfolio" />
      </div>
    </div>
  );
};
