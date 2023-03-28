import { Link } from '@tanstack/react-location';
import styles from './fejlec.module.scss';

/* eslint-disable-next-line */
export interface FejlecProps {}

export function Fejlec(props: FejlecProps) {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link to={'/'}>Főoldal</Link>
        </li>
        <li>
          <Link to={'/tapasztalat'}>Tapsztalat</Link>
        </li>
        <li>
          <Link to={'/idopont'}>Időpont</Link>
        </li>
      </ul>
    </div>
  );
}

export default Fejlec;
