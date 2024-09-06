import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const getFilter = (event) => {
    const name = event.target.value.trim();
    dispatch(setFilter(name));
  };

  return (
    <div className={css.div}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={getFilter}
      />
    </div>
  );
};

export default SearchBox;
