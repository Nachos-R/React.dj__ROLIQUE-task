import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Controller from 'Components/Controller';
import withSubscription from './withSubscription';

const Controllers = ({ playlist }) => {
  const FirstController = withSubscription(Controller, playlist.first, 1);
  const SecondController = withSubscription(Controller, playlist.second, 2);

  return (
    <Fragment>
      <FirstController />
      <SecondController />
    </Fragment>
  );
};

Controllers.propTypes = {
  playlist: PropTypes.instanceOf(Object).isRequired
};

const mapStateToProps = state => {
  console.log(state.playlist);
  return {
    playlist: state.playlist
  };
};

export default connect(mapStateToProps)(Controllers);
