import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        Welcome to Your Contact Book Creator! Start organizing your connections
        and stay in touch with ease
      </h1>
    </div>
  );
};

export default HomePage;
