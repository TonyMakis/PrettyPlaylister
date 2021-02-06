// React, PropTypes, & clsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedTracks } from '../../../../redux/actions/trackSelectionActions';
import { clearClipCopyData } from '../../../../redux/actions/copyDataActions';

// Material-UI's React Library
import { withStyles } from '@material-ui/core/styles';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Checkbox,
  FormControlLabel,
  Switch
} from '@material-ui/core';

// Components
import EnhancedTableHead from './EnhancedTableHead.jsx';
import EnhancedTableToolbar from './EnhancedTableToolbar.jsx';

function createData(id, name, artists, duration) {
  return { id, name, artists, duration };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


function msToTime(duration) {
  var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60);
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}

function formatArtists(artists) {
  let artistNames = [];
  for(let i in artists) artistNames.push(artists[i].name);
  return artistNames.join(", ");
}

const styles = ((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 320,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    borderTopLeftRadius: '1.2em',
    borderTopRightRadius: '1.2em',
  },
  table: {
    minWidth: 750,
  },
}));

class TracksGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'name',
      selected: [],
      dense: true
    };
  }

  componentDidMount() {
    const { tracksSelected } = this.props;
    this.setState({ selected: tracksSelected });
    this.props.clearClipCopyData();
  }

  render() {
    const { classes, playlist, tracks} = this.props;
    const rows = tracks.map((track) => {
      const artists = formatArtists(track.artists);
      return createData(track.id, track.name, artists, track.duration);
    });

    const handleRequestSort = (event, property) => {
      const isAsc = this.state.orderBy === property && this.state.order === 'asc';
      this.setState({ order: isAsc ? 'desc' : 'asc' });
      this.setState({ orderBy: property });
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.name);
        this.props.setSelectedTracks(newSelecteds);
        this.setState({ selected: newSelecteds });
        return;
      }
      this.props.setSelectedTracks([]);
      this.setState({ selected: [] });
    };

    const handleClick = (event, name) => {
      const selectedIndex = this.state.selected.indexOf(name);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(this.state.selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(this.state.selected.slice(1));
      } else if (selectedIndex === this.state.selected.length - 1) {
        newSelected = newSelected.concat(this.state.selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          this.state.selected.slice(0, selectedIndex),
          this.state.selected.slice(selectedIndex + 1),
        );
      }
      this.props.setSelectedTracks(newSelected);
      this.setState({ selected: newSelected });
    };

    const handleChangeDense = (event) => {
      this.setState({ dense: event.target.checked });
    };

    const isSelected = (name) => this.state.selected.indexOf(name) !== -1;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar
            title={playlist.name}
            numSelected={this.state.selected.length}
            numAvailable={playlist.numTracks}
          />
          <TableContainer className={classes.container}>
            <Table
              className={classes.table}
              aria-labelledby="Tracks Selection Grid"
              size={this.state.dense ? 'small' : 'medium'}
              aria-label="enhanced table"
              stickyHeader
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={this.state.selected.length}
                order={this.state.order}
                orderBy={this.state.orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(this.state.order, this.state.orderBy))
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>
                        <TableCell
                          align={'left'}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none">
                          {row.name}
                        </TableCell>
                        <TableCell
                          align={'left'}
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none">
                          {row.artists}
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                        >
                          {msToTime(row.duration)}
                        </TableCell>
                      </TableRow>
                    );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <FormControlLabel
          control={<Switch checked={this.state.dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { ...state.selectedTracks } 
};

const mapDispatchToProps = (dispatch) => {
   return {
       setSelectedTracks: (trackData) => { dispatch(setSelectedTracks(trackData)); },
       clearClipCopyData: () => { dispatch(clearClipCopyData()); }
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TracksGrid));
