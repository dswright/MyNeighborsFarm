import React from 'react';
import PropTypes from 'prop-types';
// import { hot } from 'react-hot-loader/root';
// import universal from 'react-universal-component';
import { Switch, Route, withRouter } from 'react-router-dom';
import styles from '../css/App';
import UsageHero from './UsageHero';
// import { pages, nextIndex, indexFromPath } from '../utils';
import Loading from './Loading';
import NotFound from './NotFound';
import Home from './home';
import Home2 from './home2';

// const determineHowToLoad = ({ page }) => typeof page !== 'string' ? () => page() : import(`./${page}`);

// const UniversalComponent = universal(determineHowToLoad, {
//   onError: error => {
//     throw error;
//   },
//   minDelay: 1200,
//   loading: Loading,
//   error: NotFound
// });

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props, context) {
     super(props, context);
  }

  // componentDidMount() {
    // const { history } = this.props
  //   this.unregisterHistoryListener = history.listen(({ pathname }) => {
  //     const index = indexFromPath(pathname)
  //     this.setState({ index })
  //   })
  // }
  //
  // componentWillUnmount() {
  //   if (this.unregisterHistoryListener) {
  //     this.unregisterHistoryListener()
  //   }
  // }
  //
  // changePage = () => {
  //   const { loading, index } = this.state
  //   const { history } = this.props
  //   if (loading) return
  //
  //   const idx = nextIndex(index)
  //   const page = pages[idx]
  //
  //   history.push(`/${page}`)
  // }
  //
  // beforeChange = ({ isSync }) => {
  //   if (!isSync) {
  //     this.setState({ loading: true, error: false })
  //   }
  // }
  //
  // afterChange = ({ isSync, isServer, isMount }) => {
  //   if (!isSync) {
  //     this.setState({ loading: false, error: false })
  //   }
  //   else if (!isServer && !isMount) {
  //     this.setState({ done: true, error: false })
  //   }
  // }
  //
  // handleError = error => {
  //   this.setState({ error: true, loading: false })
  // }

  // buttonText() {
  //   const { loading, error } = this.state
  //   if (error) return 'ERROR'
  //   return loading ? 'LOADING...' : 'CHANGE PAGE'
  // }

  render() {
    // const { index, done, loading } = this.state;
    // const page = pages[index];
    // const loadingClass = loading ? styles.loading : '';
    // const buttonClass = `${styles[page]} ${loadingClass}`;
    console.log('props', this.props);
    const { history } = this.props;
    // console.log("props", this.props);
    return (
      <div className={styles.container}>
        <h1>Hello Reactlandia</h1>
        <div className={styles.checkmark}>all loaded</div>

        <UsageHero page='home' />

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/test' component={Home2} exact />
          <Route path='/shell' component={Loading} exact />
          <Route component={NotFound} />
        </Switch>

        <button type='button' className='button' onClick={ () => { history.push('test')} }>
          Button Text
        </button>

        <p>
          <span>sample text</span>
        </p>
      </div>
    );
  }
}

export default withRouter(App);
