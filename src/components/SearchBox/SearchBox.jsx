import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.name);

  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filters ?? ""}
        onChange={handleFilter}
      />
    </div>
  );
}
