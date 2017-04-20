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
      <div>
        <Slider
          value={this.state.volume}
          min={0}
          max={100}
          orientation='horizontal'
          onChange={this.onSliderChange.bind(this)}
        />
      </div>
    );
  }
}
