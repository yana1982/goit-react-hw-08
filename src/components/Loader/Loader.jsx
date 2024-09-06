import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.infinitySpin}>
      <InfinitySpin
        visible={true}
        width="200"
        color="rgb(57, 19, 110)"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
