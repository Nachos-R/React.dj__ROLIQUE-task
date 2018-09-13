import React, { Component } from 'react';
import { connect } from 'react-redux';

import ControllerPage from 'Components/ControllerPage';

class ControllerPageContainer extends Component {
  state = {
    playlist: []
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.playlist !== state.playlist) {
      return { playlist: nextProps.playlist };
    }
    return null;
  }

  render() {
    const { playlist } = this.state;
    console.log(playlist);
    return (
      <div>{playlist.length > 0 && <ControllerPage playlist={playlist} />}</div>
    );
  }
}

ControllerPageContainer.defaultProps = {
  playlist: []
};

const mapStateToProps = state => {
  console.log(state);
  return { playlist: state.playlist };
};

export default connect(mapStateToProps)(ControllerPageContainer);
