import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

class DropZone extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      accepted: [],
      rejected: []
    };
  }

  onDrop = (accepted, rejected) => {
    this.setState({ accepted, rejected });
  };

  render() {
    const { accepted, rejected } = this.state;
    const { onClick } = this.props;
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
          <ul>
            {accepted.map(f => {
              console.log(f);
              return (
                <li key={f.name}>
                  {f.preview} - {f.size} bytes
                </li>
              );
            })}
          </ul>
        </aside>
        <aside>
          <h2>Accepted files</h2>
          <ul>
            {rejected.map(f => {
              console.log(f);
              return (
                <li key={f.name}>
                  {f.name} - {f.size} bytes
                </li>
              );
            })}
          </ul>
        </aside>
        <input
          type="button"
          value="go to player"
          onClick={() => {
            onClick(accepted);
          }}
        />
      </section>
    );
  }
}

export default DropZone;
