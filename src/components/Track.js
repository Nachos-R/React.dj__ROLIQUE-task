import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import PlayButton from './PlayButton';

const Track = ({ songName, onRemove, onPlay }) => (
  <ListItem button>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary={songName} onClick={onPlay} />
    <PlayButton value="X" onClick={onRemove} />
  </ListItem>
);

Track.propTypes = {
  songName: PropTypes.string.isRequired,
  onPlay: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Track;
