import universal from 'react-universal-component';
import Loading from '#application/components/loading/loading';

export default universal(() => import('./new-farm'), {
  loading: Loading
});
