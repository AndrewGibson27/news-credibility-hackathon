import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactButton from 'react-button';

export default class Vote extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.updateShowOrg();

    const self = this;

    setTimeout(function() {
      self.props.updateCurrTopic();
    }, 7000);
  }

  render() {
    var theme = {
      style: { background: '#ffcc20', borderRadius: '2px', fontSize: '28px', border: 'none', marginRight: '20px', color: '#222', padding: '15px', marginTop: '20px'}
    };

    return (
      <div className='vote'>
        <h2 className='vote__header'>Which article was most credible?</h2>
        <ReactButton theme={theme} onClick={this.handleClick.bind(this)}>Article 1</ReactButton>
        <ReactButton theme={theme} onClick={this.handleClick.bind(this)}>Article 2</ReactButton>
        <ReactButton theme={theme} onClick={this.handleClick.bind(this)}>Article 3</ReactButton>
      </div>
    );
  }
}
