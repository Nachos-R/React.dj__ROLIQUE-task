import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UploadPage from 'Components/UploadPage';

import { addTracks } from 'Modules/playlist';

class UploadPageContainer extends Component {
  static propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    addTracks: PropTypes.func.isRequired
  };

  addTracksAndRedirect = tracks => {
    const { history, addTracks } = this.props;

    addTracks(tracks, history);
  };

  render() {
    return <UploadPage onClick={this.addTracksAndRedirect} />;
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist
});

export default connect(
  mapStateToProps,
  { addTracks }
)(UploadPageContainer);
