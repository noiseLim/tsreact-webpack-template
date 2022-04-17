import { createRoot } from 'react-dom/client';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundary';

import './styles/style.scss';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>
);
