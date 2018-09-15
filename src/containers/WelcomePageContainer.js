import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WelcomePage from 'Components/WelcomePage';

class WelcomePageContainer extends Component {
  static propTypes = {
    history: PropTypes.instanceOf(Object).isRequired
  };

  toUploadPage = () => {
    const { history } = this.props;
    history.push('/upload');
  };

  render() {
    return <WelcomePage onClick={this.toUploadPage} />;
  }
}

const mapStateToProps = state => ({
  playlist: state.playlist
});

export default connect(mapStateToProps)(WelcomePageContainer);
