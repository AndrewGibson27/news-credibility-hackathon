import React, { Component } from 'react';
import { Link } from 'react-router';

import Article from '../article/Article';

export default class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const articlesMarkup = this.props.articles.map((article, i) => {
      return (
        <Article
          headline={article.headline}
          excerpt={article.excerpt}
          org={article.org}
          showOrg={this.props.showOrg}
          num={i}
        />
      );
    });

    return (
      <div className='topic'>
        <h2 className='topic__header'>{this.props.topicName}</h2>
        {articlesMarkup}
      </div>
    );
  }
}
