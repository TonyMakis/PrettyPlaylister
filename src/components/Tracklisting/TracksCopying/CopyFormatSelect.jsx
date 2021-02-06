// React & Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setClipCopyData } from '../../../redux/actions/copyDataActions';

// Material-UI's React Library
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';

// Components
import TabPanel from './CopyFormatSelectTabs.jsx';
import { Parser, transforms } from 'json2csv';
import ClipboardJS from 'clipboard';

/* NOTE: 'react-swipeable-views' can be added for swiping tabs
          however, there is an annoying issue with it for now
          (uses deprecated React LifeMethod); add when it has been solved!
   REF: https://github.com/oliviertassinari/react-swipeable-views/issues/596          
*/

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function jsonToCsv(tracks, excelStrings) {
    const fields = ['id', 'dateAdded', 'duration', 'explicit',
                    'name', 'popularity', 'type', 'artists.id',
                    'artists.name', 'artists.type'];
    const json2csvParser = new Parser({ fields, excelStrings });
    json2csvParser.opts.transforms = [transforms.unwind({
        paths: ['artists'], // blankOut: true
    })];
    return json2csvParser.parse(tracks);
}

const styles = ((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.secondary.dark,
    borderRadius: '1.2em',
    marginBottom: theme.spacing(2),
    minHeight: 350,
  },
  roundedAppBar: {
    borderTopLeftRadius: '1.2em',
    borderTopRightRadius: '1.2em',
  }
}));

class CopyFormatSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      json: "",
      csv: "",
      excel: ""
    };
  }

  componentDidMount() {
    let { tracks, tracksSelected } = this.props;
    const tracksToFormat = tracks.filter((track) => {
      return tracksSelected.includes(track.name);
    });

    this.setState({
      json: JSON.stringify(tracksToFormat, undefined, 4),
      csv: jsonToCsv(tracksToFormat, false),
      excel: jsonToCsv(tracksToFormat, true)
    });

    var clipboard = new ClipboardJS('#copyBtn');
    clipboard.on('success', (e) => { e.clearSelection()});
    clipboard.on('error', (e) => { console.log(e) });
  }

  componentDidUpdate() {
    switch(this.state.value) {
      case 0:  // JSON Tab
        this.props.setClipCopyData(this.state.json);
        break;
      case 1:  // CSV Tab
        this.props.setClipCopyData(this.state.csv);
        break;
      case 2:  // EXCEL Tab
        this.props.setClipCopyData(this.state.excel);
        break;
      default: // Should never run this case
        this.props.setClipCopyData(this.state.json);
        break;
    }
  }

  render() {
    let { classes } = this.props;

    const handleChange = (event, newValue) => {
      this.setState({ value: newValue });
    };

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.roundedAppBar}>
          <Tabs
            value={this.state.value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="JSON" {...a11yProps(0)} />
            <Tab label="CSV" {...a11yProps(1)} />
            <Tab label="EXCEL" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.value} index={0}>
            {this.state.json}
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
            {this.state.csv}
        </TabPanel>
        <TabPanel value={this.state.value} index={2}>
            {this.state.excel}
        </TabPanel>
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
    return { ...state.selectedTracks }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setClipCopyData: (copyData) => { dispatch(setClipCopyData(copyData)); },
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CopyFormatSelect));
