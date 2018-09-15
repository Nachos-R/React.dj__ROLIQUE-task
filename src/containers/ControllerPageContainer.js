import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Player from 'Components/Player';
import Playlist from 'Components/Playlist';

import { removeTrack } from 'Modules/playlist';

class ControllerPageContainer extends Component {
  static propTypes = {
    removeTrack: PropTypes.func.isRequired
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

  render() {
    const { playlist, index } = this.state;
    const { removeTrack } = this.props;
    return (
      <div>
        {playlist.length > 0 && (
          <Fragment>
            <Player
              url={playlist[index].url}
              nextClick={this.nextClick}
              prevClick={this.prevClick}
            />
            <Playlist
              playlist={playlist}
              removeTrack={removeTrack}
              playTrack={this.playTrack}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist
});

export default connect(
  mapStateToProps,
  { removeTrack }
)(ControllerPageContainer);
