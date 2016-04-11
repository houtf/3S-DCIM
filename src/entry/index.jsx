import '../common/lib';
import Header from '../component/Header';
import Content from '../component/Content';
import Content2 from '../component/Content2';
import Demo from '../component/Demo';
import Sidebar from '../component/Sidebar';
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory, Router,IndexRoute,IndexRedirect, Route, Link } from 'react-router';
import { Row, Col, DatePicker } from 'antd';

const App = React.createClass({

  render() {
    return (
      <Row style={{height:'100%'}}>
        <Col span="4" style={{height:'100%'}}><Sidebar /></Col>
        <Col span="20" style={{padding: '20px',backgroundColor: '#fff',height:'100%'}}>{this.props.children}</Col>
      </Row>
    );
  }
});

const App1 = React.createClass({
	render : function(){
		return(
			<Content />
		)
	}
});
const App2 = React.createClass({
	render : function(){
		return(
			<Content2 />
		)
	}
});
const Home = React.createClass({
	render : function(){
		return(
			<div>home page</div>
		)
	}
});

ReactDOM.render(<Header />, document.querySelector('header'));

ReactDOM.render((
  <Router history={browserHistory}>

	<Route path="/" component={App}>
		{/*<IndexRedirect to="/zone_list" />*/}
		<IndexRoute component={Home}/>
		<Route path="to_be_seen" component={App1} />
		<Route path="zone_list" component={App2} />
		<Route path="demo" component={Demo} />
	</Route>

  </Router>
), document.querySelector('#main'));

{/*React.initializeTouchEvents(true);*/}

