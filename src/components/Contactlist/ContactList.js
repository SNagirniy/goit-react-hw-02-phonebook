import React from 'react';
import propTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ children }) => {
  return <ul className={s.list}>{children}</ul>;
};

ContactList.propTypes = {
  children: propTypes.object,
};

export default ContactList;
