import { NavLink } from "react-router-dom";
import { learn_lingo_1x, learn_lingo_2x } from "../../assets/images";
import css from "./Intro.module.css";

const Intro = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h1 className={css.title}>
          Unlock your potential with the best{" "}
          <span className={css.highlight}>language</span> tutors
        </h1>
        <p className={css.paragraph}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <NavLink to="/teachers" className={css.link}>
          Get started
        </NavLink>
      </div>
      <img
        className={css.img}
        loading="lazy"
        srcSet={`
      ${learn_lingo_1x} 1x,
      ${learn_lingo_2x} 2x,
    `}
        src={learn_lingo_1x}
        alt="girl with laptop"
        width="568px"
        height="530px"
      />
    </div>
  );
};

export default Intro;
