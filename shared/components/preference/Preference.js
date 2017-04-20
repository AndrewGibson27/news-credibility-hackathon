import React, { Component } from 'react';
import { Link } from 'react-router';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

export default class Preference extends Component {
  constructor(props) {
    super(props);
  }

  onRadioChange() {

  }

  render() {
    const answersMarkup = this.props.answers.map(answer => {
      return (
        <RadioButton value={answer.value} pointColor={'#ffc200'}>
          {answer.label}
        </RadioButton>
      );
    });

    return (
      <div className='preference'>
        <h2 className='preference__header'>{this.props.question}</h2>

        <RadioGroup onChange={this.onRadioChange.bind(this)} horizontal>
          {answersMarkup}
        </RadioGroup>
      </div>
    );
  }
}
