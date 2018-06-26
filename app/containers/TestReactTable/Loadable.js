/**
 *
 * Asynchronously loads the component for TestReactTable
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
