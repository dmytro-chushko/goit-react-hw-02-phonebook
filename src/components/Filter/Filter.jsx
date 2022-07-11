import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const Filter = ({ onChange, filter }) => {
  const inputFilterId = nanoid();

  return (
    <>
      <label className={css.label} htmlFor={inputFilterId}>
        Find contacts by name
      </label>
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

export default Filter;
