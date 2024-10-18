import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <div>
    <Sum comment="Sum of 2 and 3 is:" a={2} b={3} />
    <Sum comment="Sum of -5 and 5 is:" a={-5} b={5} />
    <Sum comment="Sum of 10 and 0 is:" a={10} b={0} />
    <Sum comment="Sum of 0 and 5 is:" a={0} b={5} />
    <Sum comment="Sum of 0 and 0 is:" a={0} b={0} />
  </div>
);
