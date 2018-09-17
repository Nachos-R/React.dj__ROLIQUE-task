import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

class DropZone extends Component {
  static propTypes = {
    onDrop: PropTypes.func.isRequired,
    first: PropTypes.number,
    second: PropTypes.number
  };

  onDrop = accepted => {
    const { onDrop, first, second } = this.props;
    return first ? onDrop(accepted, first) : onDrop(accepted, second);
  };

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone accept="audio/*" onDrop={this.onDrop}>
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
            <p>Only audio files will be accepted</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Accepted files</h2>
        </aside>
        <aside>
          <h2>Accepted files</h2>
        </aside>
      </section>
    );
  }
}

DropZone.defaultProps = {
  first: 0,
  second: 0
};

export default DropZone;
