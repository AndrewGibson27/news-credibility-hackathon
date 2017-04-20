import React, { Component } from 'react';
import { Link } from 'react-router';
import BarChart from 'react-bar-chart';

export default class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const margin = {top: 20, right: 20, bottom: 30, left: 40};

    return (
      <div className='results'>
        <p className='results__summary'>You thought [publication]’s article was the most credible. X% agreed with you. Y% thought [publication]’s article was most credible. X% thought [publication]’s article was most credible.</p>

        <ul className='results__keyPoints'>
          <li>The majority of liberal-leaning people (X%) considered [publication]’s article to be most credible.</li>
          <li>The majority of conservative-leaning people (X%) considered [publication]’s article to be most credible.</li>
          <li>The majority of centre-leaning people (X%) considered [publication]’s article to be most credible.</li>
        </ul>

        <div style={{width: '100%'}}>
          <h2 className='results__header'>Fox commentator dismissed</h2>
          <BarChart
            width={800}
            height={500}
            margin={margin}
            data={[
              { text: 'Breitbart', value: 40 },
              { text: 'Guardian', value: 100 },
              { text: 'Bloomberg', value: 34 }
            ]}
          />
        </div>

        <div style={{width: '100%'}}>
          <h2 className='results__header'>U.S. Military Drops Massive Bomb on Islamic State in Afghanistan</h2>
          <BarChart
            width={800}
            height={500}
            margin={margin}
            data={[
              { text: 'Breitbart', value: 45 },
              { text: 'Guardian', value: 300 },
              { text: 'Bloomberg', value: 199 }
            ]}
          />
        </div>
      </div>
    );
  }
}
