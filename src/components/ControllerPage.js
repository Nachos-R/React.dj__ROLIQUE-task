import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const ControllerPage = ({ playlist }) => <Player playlist={playlist} />;

ControllerPage.propTypes = {
  playlist: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired
};

export default ControllerPage;
