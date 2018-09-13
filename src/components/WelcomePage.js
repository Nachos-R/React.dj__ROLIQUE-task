import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WelcomePage extends Component {
  toUploadPage = () => {
    const { history } = this.props;
    history.push('/upload');
  };

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <p>Welcome to my MusicSite!</p>
        <input type="button" onClick={this.toUploadPage} value="Add tracks" />
      </div>
    );
  }
}

WelcomePage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired
};
const mapStateToProps = state => {
  console.log('welcome', state);
  return { playlist: state.playlist };
};

export default connect(mapStateToProps)(WelcomePage);
