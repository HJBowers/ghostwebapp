import React, { Component } from 'react';
import {ReactMic} from 'react-mic';
import FileSaver from 'file-saver'
var file = {};
var xhr = new XMLHttpRequest();
xhr.open('GET', blobURL, true);
xhr.responseType = 'blob';
xhr.onload = function(e) {
    if (this.status == 200) {
        file.file = this.response;
        file.name = "whatever_filename.mp3";
        file.size = getYourBlobSize();
        file.type = "audio/mpeg";
        uploadAudioBlobs(file);
    }
};
xhr.send();

=======
import React, {Component} from 'react';
import {render} from 'react-dom';
import {FloatingActionButton, MuiThemeProvider} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MicrophoneOn from 'material-ui/svg-icons/av/mic';
import MicrophoneOff from 'material-ui/svg-icons/av/stop';
>>>>>>> 38a8c96c5cd1f1ceff9b92c4286d0f1ac123c649

import { ReactMic } from 'react-mic';

injectTapEventPlugin();

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blobObject: null,
      isRecording: false
    }
  }

  startRecording = () => {
    this.setState({record: true, isRecording: true});
  }

  stopRecording = () => {
    this.setState({record: false, isRecording: false});
  }

<<<<<<< HEAD
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    var blob = new Blob([recordedBlob], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "hello world.txt");
=======
  onStart = () => {
    console.log('You can tap into the onStart callback');
  }

  onStop = (blobObject) => {
    this.setState({blobURL: blobObject.blobURL});
>>>>>>> 38a8c96c5cd1f1ceff9b92c4286d0f1ac123c649
  }

  render() {
    console.log('BLOB URL',this.state.blobURL)
    const {isRecording} = this.state;

    return (
      <MuiThemeProvider>
        <div>
          <ReactMic
            className="oscilloscope"
            record={this.state.record}
            backgroundColor="#FF4081"
            visualSetting="sinewave"
            audioBitsPerSecond={128000}
            onStop={this.onStop}
            onStart={this.onStart}
            strokeColor="#000000"/>
          <div>
            <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
          </div>
          <br/>
          <br/>
          <FloatingActionButton
            className="btn"
            secondary={true}
            disabled={isRecording}
            onClick={this.startRecording}>
            <MicrophoneOn/>
          </FloatingActionButton>
          <FloatingActionButton
            className="btn"
            secondary={true}
            disabled={!isRecording}
            onClick={this.stopRecording}>
            <MicrophoneOff/>
          </FloatingActionButton>
        </div>
      </MuiThemeProvider>
    );
  }
}
