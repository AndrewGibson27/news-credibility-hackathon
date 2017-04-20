import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from 'react-rangeslider';

import 'react-rangeslider/lib/index.scss';

export default class PoliticalPreference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0
    };
  }

  onSliderChange(volume) {
    this.setState({
      volume
    });
  }

  render() {
    return (
      <Slider
        value={this.state.volume}
        orientation='horizontal'
        onChange={this.onSliderChange.bind(this)}
      />
    );
  }
}
