import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        We&apos;re sorry, but we couldn&apos;t load the teachers. Please refresh
        the page or try again later.
      </p>
    </div>
  );
};

export default ErrorMessage;
