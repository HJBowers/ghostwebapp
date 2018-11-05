// Import modules
import React, { Component } from 'react';
import AudioRecorder from './NodeAudiorecorder';
import {FloatingActionButton, MuiThemeProvider} from 'material-ui';
import Icon from 'material-design-icons';
import fs from 'fs';
import path from 'path';
// import DIRECTORY from 'examples-recordings';

// Options is an optional parameter for the constructor call.
// If an option is not given the default value, as seen below, will be used.
const options = {
    program: 'sox',			// Which program to use, either 'arecord', 'rec', and 'sox'.
    device: null,			// Recording device to use.

    channels: 1,			// Channel count.
    bits: 16,				// Sample size. (only for 'rec' and 'sox')
    encoding: 'signed-integer',	// Encoding type. (only for 'rec' and 'sox')
    rate: 16000,			// Sample rate.
    type: 'wav',			// File type.

    // Following options only for 'rec' and 'sox' programs
    silence: 1,				// Time of silence in seconds before it stops recording.
    threshold: 0.5,			// Silence threshold.
    thresholdStart: null,	// Silence threshold to start recording, overrides threshold.
    thresholdStop: null,	// Silence threshold to stop recording, overrides threshold.
};

// Optional parameter intended for debugging.
// The object has to implement a log and warn function.
const logger = console;


export default class Recorder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     audioRecorder: null
  //   }
  // }

  let audioRecorder = new AudioRecorder(options, logger)

  // startRecording = () => {
  //   this.audioRecorder.Start();
  // }
  //
  // stopRecording = () => {
  //   this.audioRecorder.Stop();
  // }
  //
  // saveRecording = () => {
  //   this.audioRecorder.Stream();
  // }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <FloatingActionButton
            className="btn"
            secondary={true}
            onClick={audioRecorder.Start()}>
          </FloatingActionButton>
          <FloatingActionButton
            className="btn"
            secondary={true}
            onClick={audioRecorder.Stop()}>
          </FloatingActionButton>
          <FloatingActionButton
            className="btn"
            secondary={true}
            onClick={audioRecorder.Stream()}>
          </FloatingActionButton>
        </div>
      </MuiThemeProvider>
    );
  }
}
