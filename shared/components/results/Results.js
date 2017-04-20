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
        <div style={{width: '100%'}}>
          <h2 className='results__header'>Politics</h2>
          <BarChart
            width={800}
            height={500}
            margin={margin}
            data={[
              { text: 'Article 1', value: 40 },
              { text: 'Article 2', value: 100 },
              { text: 'Article 3', value: 34 },
              { text: 'Article 4', value: 68 }
            ]}
          />
        </div>

        <div style={{width: '100%'}}>
          <h2 className='results__header'>Energy</h2>
          <BarChart
            width={800}
            height={500}
            margin={margin}
            data={[
              { text: 'Article 1', value: 45 },
              { text: 'Article 2', value: 300 },
              { text: 'Article 3', value: 199 },
              { text: 'Article 4', value: 27 }
            ]}
          />
        </div>
      </div>
    );
  }
}
