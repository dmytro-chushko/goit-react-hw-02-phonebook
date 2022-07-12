import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ getContacts, onDelete }) => (
  <>
    {getContacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        {name}: {number}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </>
);

ContactItem.propTypes = {
  getCintacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
