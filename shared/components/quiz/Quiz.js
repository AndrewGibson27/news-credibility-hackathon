import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import Topic from '../topic/Topic';
import Vote from '../vote/Vote';
import Results from '../results/Results';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [],
      currTopicIndex: 0,
      goToResults: false,
      showOrg: false
    };
  }

  componentDidMount() {
    const self = this;

    $.ajax({
      url: 'http://localhost:3000/api/quiz',
      dataType: 'json'
    })
    .done(function(data){
      self.setState({
        quiz: data.quiz
      });
    });
  }

  isLastQuestion() {
    return this.state.currTopicIndex === this.state.quiz.length - 1;
  }

  updateCurrTopic() {
    if (this.isLastQuestion()) {
      this.setState({
        showOrg: false,
        goToResults: true
      });
    } else {
      this.setState({
        showOrg: false,
        currTopicIndex: ++this.state.currTopicIndex
      });
    }
  }

  updateShowOrg() {
    this.setState({
      showOrg: true
    });
  }

  render() {
    const resultsMarkup = this.isLastQuestion() ? <Link className='preferences__link' to={`/results`}>Show results</Link> : '';

    if (this.state.quiz.length) {
      return (
        <div className='quiz'>
          <Topic
            topicName={this.state.quiz[this.state.currTopicIndex].topic}
            articles={this.state.quiz[this.state.currTopicIndex].articles}
            showOrg={this.state.showOrg}
          />

          <Vote
            updateCurrTopic={this.updateCurrTopic.bind(this)}
            updateShowOrg={this.updateShowOrg.bind(this)}
          />

          {resultsMarkup}
        </div>
      );
    }

    return false;
  }
}
