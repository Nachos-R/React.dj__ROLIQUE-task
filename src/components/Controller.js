import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Player from 'Components/Player';
import Playlist from 'Components/Playlist';

const Controller = ({
  nextClick,
  prevClick,
  playTrack,
  removeTrack,
  playlist,
  index
}) => (
  <Fragment>
    {playlist[0] && (
      <div style={{ width: '50%', float: 'left' }}>
        <Player
          url={playlist[index].url}
          nextClick={nextClick}
          prevClick={prevClick}
        />
        <Playlist
          playlist={playlist}
          removeTrack={removeTrack}
          playTrack={playTrack}
        />
      </div>
    )}
  </Fragment>
);

Controller.propTypes = {
  removeTrack: PropTypes.func.isRequired,
  nextClick: PropTypes.func.isRequired,
  prevClick: PropTypes.func.isRequired,
  playTrack: PropTypes.func.isRequired,
  playlist: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  index: PropTypes.number.isRequired
};

export default Controller;
