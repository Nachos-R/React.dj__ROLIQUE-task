import React from 'react';
import PropTypes from 'prop-types';

const WelcomePage = props => {
  const { onClick } = props;
  return (
    <div>
      <p>Welcome to my MusicSite!</p>
      <input type="button" onClick={onClick} value="Add tracks" />
    </div>
  );
};

WelcomePage.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default WelcomePage;
