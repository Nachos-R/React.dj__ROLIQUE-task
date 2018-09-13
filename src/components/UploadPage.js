import React from 'react';
import PropTypes from 'prop-types';

import DropZone from './DropZone';

const UploadPage = ({ onClick }) => (
  <div>
    <DropZone onClick={onClick} />
  </div>
);

UploadPage.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default UploadPage;
