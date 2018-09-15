import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

import Song from './Song';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const PlayList = ({ classes, playlist, removeTrack, playTrack }) => (
  <div className={classes.root}>
    <List component="nav">
      {playlist.map(song => (
        <Song
          key={song.id}
          songName={song.name}
          onPlay={() => playTrack(song.id)}
          onRemove={() => removeTrack(song.id)}
        />
      ))}
    </List>
  </div>
);

PlayList.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  playlist: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  removeTrack: PropTypes.func.isRequired,
  playTrack: PropTypes.func.isRequired
};

export default withStyles(styles)(PlayList);
