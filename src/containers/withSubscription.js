import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { removeTrack } from 'Modules/playlist';

function withSubscription(WrappedComponent, data, zone) {
  class ControllerWithSubscription extends Component {
    static propTypes = {
      removeTrack: PropTypes.func.isRequired
    };

    constructor(props) {
      super(props);
      this.state = {
        playlist: data,
        index: 0,
        zone
      };
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
      console.log('onRemove');
      const { removeTrack } = this.props;
      const { zone } = this.state;
      // this.setState(prevState => ({ index: prevState.index - 1 }));
      removeTrack(id, zone);
    };

    render() {
      const { playlist, index } = this.state;
      return (
        <WrappedComponent
          playlist={playlist}
          index={index}
          nextClick={this.nextClick}
          prevClick={this.prevClick}
          playTrack={this.playTrack}
          removeTrack={this.removeTrack}
        />
      );
    }
  }

  return connect(
    null,
    { removeTrack }
  )(ControllerWithSubscription);
}

export default withSubscription;
