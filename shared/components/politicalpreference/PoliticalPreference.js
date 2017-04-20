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
        className='slider'
        value={this.state.volume}
        orientation='horizontal'
        labels={{ 0: 'Conservative', 100: 'Liberal'}}
        onChange={this.onSliderChange.bind(this)}
      />
    );
  }
}
