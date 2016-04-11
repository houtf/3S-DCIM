/*import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'

class User extends React.Component {
  render() {
    let userID = this.props.params.userID;
    let query = this.props.location.query;
    let age = query && query.showAge ? '33' : ''
    return (
      <div className="User">
        <h1>User id: {userID}</h1>
        {age}
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/user/bob" activeClassName="active">Bob</Link></li>
          <li><Link to={{ pathname: '/user/bob', query: { showAge: true } }} activeClassName="active">Bob With Query Params</Link></li>
          <li><Link to="/user/sally.xxx" activeClassName="active">Sally</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="user/:userID" component={User} />
    </Route>
  </Router>
), document.getElementById('example'))





import '../../assets/react-router/index.css';
import 'antd/lib/index.css';
import React from 'react';
import { Link } from 'react-router';
import { findStates } from './util';

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
  },

  getInitialState() {
    return {
      states: findStates(),
    };
  },

  render() {
    const links = this.state.states.map((state) => {
      const ret = (
        <li key={state.abbr}>
          <Link
            to={`/state/${state.abbr}`}
          >
            {state.name}
          </Link>
        </li>
      );
      return ret;
    });
    return (
      <div className="row App">
        <ul className="col-5 Master">
          {links}
        </ul>
        <div className="col-18 Detail">
          {this.props.children}
        </div>
      </div>
    );
  },
});

export default App;*/