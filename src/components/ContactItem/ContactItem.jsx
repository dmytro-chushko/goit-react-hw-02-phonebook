import css from './ContactItem.module.css';

const ContactItem = ({ getContacts, onDelete }) => (
  <>
    {getContacts.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        {name}: {number}
        <button
          className={css.button}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </>
);

export default ContactItem;
