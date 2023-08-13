import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => {
  <div className={css.filter__box}>
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        placeholder="Enter phone number to find"
        onChange={onChangeFilter}
        className={css.input}
      />
      <input />
    </label>
  </div>;
};
export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
