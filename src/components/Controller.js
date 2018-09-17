import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import Player from 'Components/Player';
import Playlist from 'Components/Playlist';

class Controller extends Component {
  static propTypes = {
    onRemove: PropTypes.func.isRequired,
    first: PropTypes.bool,
    second: PropTypes.bool
  };

  state = {
    playlist: [],
    index: 0
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.playlist !== state.playlist) {
      return { playlist: nextProps.playlist };
    }
    return null;
  }

  nextClick = () => {
    console.log('nextSong');
    const { index, playlist } = this.state;
    if (index < playlist.length - 1) {
      this.setState(prevState => ({ index: prevState.index + 1 }));
    }
  };

  prevClick = () => {
    console.log('prevSong');
    const { index } = this.state;
    if (index > 0) {
      this.setState(prevState => ({ index: prevState.index - 1 }));
    }
  };

  playTrack = id => {
    const { playlist } = this.state;
    const trackIndex = playlist.findIndex(track => track.id === id);
    console.log(trackIndex);
    this.setState({ index: trackIndex });
  };

  removeTrack = id => {
    const { onRemove, first, second } = this.props;
    this.setState({ index: 0 });
    return first ? onRemove(id, first) : onRemove(id, second);
  };

  render() {
    const { playlist, index } = this.state;
    console.log(index);
    return (
      <Fragment>
        {playlist[0] && (
          <div>
            <Player
              url={playlist[index].url}
              nextClick={this.nextClick}
              prevClick={this.prevClick}
            />
            <Playlist
              playlist={playlist}
              removeTrack={this.removeTrack}
              playTrack={this.playTrack}
            />
          </div>
        )}
      </Fragment>
    );
  }
}

export default Controller;
