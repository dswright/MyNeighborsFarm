import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../../ducks/user';

const Home = ({ user, dispatch }) => (
  <div>
    <Helmet
      title='Home'
      meta={[{ name: 'description', content: 'Welcome to Reactivity' }]}
    />
    <button
      type='submit'
      onClick={() => {
        dispatch(setUser('newUser'));
      }}
    >
        SET NEW USER
    </button>
    <h1>What is it really?</h1>
    <p>
        A
      {' '}
      <b>universally rendered PWA</b>
      {' '}
with
      {' '}
      <b>code-splitting</b>
      {' '}
that uses:
    </p>
    <ul>
      <li>React</li>
      <li>React Router 4</li>
      <li>Redux</li>
      <li>Webpack</li>
      <li>Express</li>
      <li>Eslint</li>
      <li>Redux Form</li>
      <li>Style and Sass Loader</li>
      <li>RXJS</li>
      <li>Service Worker</li>
    </ul>

    <p>
        Take a look at our
      {' '}
      <Link to='/examples'>Examples Page</Link>
      {' '}
to see
        parts of this in action.
    </p>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Home);
