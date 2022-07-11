import css from './ContactList.module.css';

const ContactList = ({ children }) => <ul className={css.list}>{children}</ul>;

export default ContactList;
