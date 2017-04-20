import React, { Component } from 'react';
import { Link } from 'react-router';

import Preference from '../preference/Preference';
import PoliticalPreference from '../politicalpreference/PoliticalPreference';

export default class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.initial || window.INITIAL || { preferences: [] };
  }

  render() {
    const radiosMarkup = this.state.preferences.map(preference => {
      return (
        <Preference
          question={preference.question}
          answers={preference.answers}
        />
      );
    });

    return (
      <div>
        <h2>Choose your political preference</h2>
        <PoliticalPreference />
        {radiosMarkup}
      </div>
    );
  }
}
