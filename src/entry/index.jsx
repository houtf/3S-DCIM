import '../common/lib';
import Header from '../component/Header';
import Content from '../component/Content';
import Content2 from '../component/Content2';
import Sidebar from '../component/Sidebar';
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import { Row, Col} from 'antd';

const App1 = React.createClass({

  render() {
  	console.log('App1');
    return (
      <Row style={{height:'100%'}}>
        <Col span="4" style={{height:'100%'}}><Sidebar /></Col>
        <Col span="20" style={{padding: '20px 20px 0',backgroundColor: '#fff',height:'100%'}}><Content /></Col>
      </Row>
    );
  }
});

const App2 = React.createClass({
	
  render() {
  	console.log('App2');
    return (
      <Row style={{height:'100%'}}>
        <Col span="4" style={{height:'100%'}}><Sidebar /></Col>
        <Col span="20" style={{padding: '20px 20px 0',backgroundColor: '#fff',height:'100%'}}><Content2 /></Col>
      </Row>
    );
  }
});

ReactDOM.render(<Header />, document.querySelector('header'));

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App2}>
    	<Route path="to_be_seen" component={App1}></Route>
    	<Route path="zone_list" component={App2}></Route>
    </Route>
  </Router>
), document.querySelector('#main'));

