import ReactDOM from 'react-dom';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundary';

import './styles/style.scss';

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById('root')
);
