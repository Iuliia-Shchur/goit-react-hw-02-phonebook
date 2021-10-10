import s from "./Filter.module.css";
import PropTypes from "prop-types";

function Filter({ filter, onFilterChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="name"
        value={filter}
        onChange={onFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
