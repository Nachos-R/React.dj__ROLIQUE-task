import React from 'react';
import PropTypes from 'prop-types';

import DropZone from './DropZone';

const UploadPage = ({ onDrop, history }) => (
  <div>
    <DropZone onDrop={onDrop} first={1} />
    <DropZone onDrop={onDrop} second={2} />
    <input
      type="button"
      value="go to player"
      onClick={() => {
        history.push('/dj-controller');
      }}
    />
  </div>
);

UploadPage.propTypes = {
  onDrop: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired
};

export default UploadPage;
