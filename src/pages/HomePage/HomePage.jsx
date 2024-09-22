import css from "./HomePage.module.css";
import Intro from "../../components/Intro/Intro";
import Statistics from "../../components/Statistics/Statistics";

const HomePage = () => {
  return (
    <div className={css.container}>
      <Intro />
      <Statistics />
    </div>
  );
};

export default HomePage;
