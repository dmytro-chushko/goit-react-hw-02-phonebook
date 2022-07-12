import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ children }) => <ul className={css.list}>{children}</ul>;

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactList;
