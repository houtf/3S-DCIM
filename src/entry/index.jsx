import '../common/lib';
import Header from '../component/Header';
import Content from '../component/Content';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(<Header />, document.querySelector('header'));
ReactDOM.render(<Content />, document.querySelector('#main'));

