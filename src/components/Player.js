import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactPlayer from 'react-player';
import PlayButton from './PlayButton';

class ControllerPage extends Component {
  state = {
    url: null,
    playing: true,
    // volume: 0.8,
    muted: false,
    // played: 0,
    // loaded: 0,
    // duration: 0,
    playbackRate: 1.0
    // loop: false
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.url !== state.url) {
      return { url: nextProps.url };
    }
    return null;
  }

  onPlay = () => {
    console.log('onPlay');
    this.setState({ playing: true });
  };

  onPause = () => {
    console.log('onPause');
    this.setState({ playing: false });
  };

  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  playPause = () => {
    this.setState(prevState => ({
      playing: !prevState.playing
    }));
  };

  toggleMuted = () => {
    this.setState(prevState => ({ muted: !prevState.muted }));
  };

  render() {
    const {
      url,
      playing,
      // volume,
      muted,
      // loop,
      // played,
      // loaded,
      // duration,
      playbackRate
    } = this.state;
    const { prevClick, nextClick } = this.props;

    return (
      <div>
        <ReactPlayer
          url={url}
          playing={playing}
          controls
          muted={muted}
          onPlay={this.onPlay}
          onPause={this.onPause}
          playbackRate={playbackRate}
          style={{ width: '50%' }}
        />
        <PlayButton value="prev" onClick={prevClick} />
        <PlayButton
          value={playing ? 'pause' : 'play'}
          onClick={this.playPause}
        />
        <PlayButton value="next" onClick={nextClick} />
        <PlayButton value="1" onClick={this.setPlaybackRate} />
        <PlayButton value="1.5" onClick={this.setPlaybackRate} />
        <PlayButton value="2" onClick={this.setPlaybackRate} />
        <label htmlFor="muted">
          Muted
          <input
            id="muted"
            type="checkbox"
            checked={muted}
            onChange={this.toggleMuted}
          />
        </label>
      </div>
    );
  }
}

ControllerPage.propTypes = {
  nextClick: PropTypes.func.isRequired,
  prevClick: PropTypes.func.isRequired
};

export default ControllerPage;
