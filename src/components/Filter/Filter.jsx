import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onChange, filter }) => {
  const inputFilterId = nanoid();

  return (
    <>
      <label htmlFor={inputFilterId}>Find contacts by name</label>
      <input
        id={inputFilterId}
        className={css.input}
        type="text"
        value={filter}
        name="filter"
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
