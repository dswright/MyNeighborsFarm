import universal from 'react-universal-component';
import Loading from '../loading/loading';

export default universal(() => import('./examples'), {
  loading: Loading
});
