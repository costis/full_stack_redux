import React from 'react';
import Voting from './components/Voting';

const pair = ['Trainspoting', '28 Days Later'];

React.render(
  <Voting pair={pair}/>,
    document.getElementById('app')
);
