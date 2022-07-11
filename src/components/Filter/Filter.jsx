import { nanoid } from 'nanoid';

const Filter = ({ onChange, filter }) => {
  const inputFilterId = nanoid();

  return (
    <>
      <label htmlFor={inputFilterId}>Find contacts by name</label>
      <input
        id={inputFilterId}
        type="text"
        value={filter}
        name="filter"
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
