import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const orgMarkup = this.props.showOrg ? <p className='article__org'>{this.props.org}</p> : '';

    return (
      <div className='article'>
        <h3 className='article__headline'>{this.props.num+1}. {this.props.headline}</h3>
        {orgMarkup}
        <p className='article__excerpt'>{this.props.excerpt}</p>
      </div>
    );
  }
}
