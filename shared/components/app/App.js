import React, { Component } from 'react';

import styles from './app.scss';
import Preferences from '../preferences/Preferences';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
