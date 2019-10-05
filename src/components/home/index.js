import universal from 'react-universal-component'
import Loading from '../loading/loading';

export default universal(() => import('./home'), {
  loading: Loading
});
