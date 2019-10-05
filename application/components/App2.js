import React from 'react';
// import { hot } from 'react-hot-loader/root';
// import universal from 'react-universal-component';
import { Switch, Route, withRouter } from 'react-router-dom';
import UsageHero from './UsageHero';
import Loading from './Loading';
import NotFound from './NotFound';
import Home from './home';
import Home2 from './home2';

const App = ({ history }) => (
  <div>
    <h1>Hello Reactlandia</h1>
    <div>all loaded</div>

    <UsageHero page='home' />

    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/test' component={Home2} exact />
      <Route path='/shell' component={Loading} exact />
      <Route component={NotFound} />
    </Switch>

    <button
      type='button'
      className='button'
      onClick={() => {
        history.push('test');
      }}
    >
      Button Text
    </button>

    <p>
      <span>sample text</span>
    </p>
  </div>
);

export default withRouter(App);
