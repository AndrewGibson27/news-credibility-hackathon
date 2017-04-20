import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './app.scss';
import Preferences from '../preferences/Preferences';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
