/* eslint-disable */
import React, { Component } from 'react';

class VideoPlayer extends Component {
  componentDidMount() {

    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });
  }
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
  render() {
    return (
      <div data-vjs-player className="text-center">
        <video id="app-video" ref={node => this.videoNode = node} className="video-js" autoPlay muted></video>
      </div>
    );
  }
}

export default VideoPlayer;