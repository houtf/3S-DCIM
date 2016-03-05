import '../common/lib';
import App from '../component/App';
import Header from '../component/Header';
import Sider from '../component/Sider';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(<Header />, document.querySelector('header'));
ReactDOM.render(<Sider />, document.querySelector('aside'));
ReactDOM.render(<App />, document.getElementById('react-content'));
