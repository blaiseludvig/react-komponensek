import {
  Outlet,
  ReactLocation,
  Router,
  createBrowserHistory,
} from '@tanstack/react-location';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Fejlec from './fejlec/fejlec';
import Lablec from './lablec/lablec';
import { routes } from './routes';

const history = createBrowserHistory();
const location = new ReactLocation({ history });

export function App() {
  return (
    <Router location={location} routes={routes}>
      <div className={styles['app']}>
        <Fejlec />
        <Outlet />
        <Lablec />
      </div>
    </Router>
  );
}

export default App;
