import React from 'react';
import PropTypes from 'prop-types';

const PlayButton = ({ value, onClick }) => (
  <input type="button" value={value} onClick={onClick} />
);

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default PlayButton;
