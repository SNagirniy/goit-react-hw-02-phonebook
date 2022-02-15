import React from 'react';
import propTypes from 'prop-types';
import s from './ListItem.module.css';

const ListItem = ({ data, onDelete }) => {
  return data.map(({ name, number, id }) => {
    return (
      <li className={s.item} key={id}>
        {name}: {number}{' '}
        <button className={s.delete_button} onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    );
  });
};

ListItem.propTypes = {
  data: propTypes.array.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default ListItem;
