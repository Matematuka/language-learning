import css from "./HomePage.module.css";
import Intro from "../../components/Intro/Intro";

const HomePage = () => {
  return (
    <div className={css.container}>
      <Intro />
    </div>
  );
};

export default HomePage;
