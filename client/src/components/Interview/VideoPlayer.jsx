/* eslint-disable */
import React, { Component } from 'react';

class VideoPlayer extends Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      this.controlBar.liveDisplay.hide();
    });
    videojs.players['app-video'].controlBar.liveDisplay.hide();
    videojs('app-video', {
      controlBar: {
        fullscreenControl: false
      }
    });
  }
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
      player.recorder.destroy();
    }
  }
  render() {
    
    return (
      <div data-vjs-player muted autoPlay className="text-center">
        <video id="app-video"
          ref={node => this.videoNode = node} 
          className="video-js" 
        ></video>
      </div>
    );
  }
}

export default VideoPlayer;