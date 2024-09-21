import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>Please refresh the page or try again later.</p>
    </div>
  );
};

export default ErrorMessage;
