import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import Preference from '../preference/Preference';
import PoliticalPreference from '../politicalpreference/PoliticalPreference';

export default class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.initial || window.INITIAL || { preferences: [] };
  }

  componentDidMount() {
    const self = this;

    $.ajax({
      url: 'http://localhost:3000/api/preferences',
      dataType: 'json'
    })
    .done(function(data){
      self.setState({
        quiz: data.quiz
      });
    });
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
        <header className='header'>
          <div className='header__inner'>
            <h1 className='header__headline'>Welcome to Incredibility</h1>
            <h2 className='header__sub'>Before we start, set the slider to the position that best describes your political identity.</h2>
          </div>
        </header>

        <div className='preferences'>
          <h2 className='preferences__header'>Choose your political preference</h2>
          <PoliticalPreference />
          {radiosMarkup}
          <Link className='preferences__link' to={`/quiz`}>Begin quiz</Link>
        </div>
      </div>
    );
  }
}
