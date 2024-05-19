import './index.scss';

import { AppRoutes } from './AppRoutes';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppRoutes />
);