import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeTrack } from 'Modules/playlist';
import Controller from '../components/Controller';

class ControllerPageContainer extends Component {
  static propTypes = {
    removeTrack: PropTypes.func.isRequired
  };

  state = {
    playlists: { first: [], second: [] }
  };

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.playlists !== state.playlists) {
      return { playlists: nextProps.playlist };
    }
    return null;
  }

  onRemove = (id, zone) => {
    const { removeTrack } = this.props;
    removeTrack(id, zone);
  };

  render() {
    const { playlists } = this.state;
    return (
      <Fragment>
        <Controller
          playlist={playlists.first}
          onRemove={this.onRemove}
          first={1}
        />
        <Controller
          playlist={playlists.second}
          onRemove={this.onRemove}
          second={2}
        />
      </Fragment>
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
