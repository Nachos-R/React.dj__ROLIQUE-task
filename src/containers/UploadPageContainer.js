import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';

import UploadPage from 'Components/UploadPage';
import { addTracks } from 'Modules/playlist';

class UploadPageContainer extends Component {
  static propTypes = {
    history: PropTypes.instanceOf(Object).isRequired,
    addTracks: PropTypes.func.isRequired
  };

  onDrop = (files, zone) => {
    const { addTracks } = this.props;
    const tracks = files.map(track => ({
      id: uuid(),
      name: track.name,
      url: track.preview,
      currIndex: 0
    }));

    addTracks(tracks, zone);
  };

  render() {
    const { history } = this.props;
    return <UploadPage onDrop={this.onDrop} history={history} />;
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist
});

export default connect(
  mapStateToProps,
  { addTracks }
)(UploadPageContainer);
