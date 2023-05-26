import Image from "../images/sofia.jpg";
import classes from "../css/Home.module.css";
import setBodyColor from "../setBodyColor";
import Fade from "react-reveal";
import { Slide } from "react-reveal";

function HomePage() {
  setBodyColor({ color: "#000000" });

  return (
    <>
      <div>
        <Slide top duration={1000}>
          <h1>Explore</h1>
        </Slide>
        <Fade duration={5000}>
          <div className={classes.black}>
            <img
              style={{ display: "flex", justifyContent: "center" }}
              src={Image}
            />
          </div>
        </Fade>
        <Fade bottom delay={1000} >
          <h2>Welcome to Explore Sofia</h2>
        </Fade>
        <Fade bottom delay={2000} >
        <h2>Here you can learn interesting facts about the most famous sights in Bulgarian capital.</h2>
        </Fade>
      </div>
    </>
  );
}

export default HomePage;
