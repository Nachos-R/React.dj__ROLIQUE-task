import React from 'react';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player';

const Player = ({ playlist }) => (
  <ReactPlayer url={playlist[0].preview} playing controls />
);

Player.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired
};

export default Player;
