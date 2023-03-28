import styles from './lablec.module.scss';

/* eslint-disable-next-line */
export interface LablecProps {}

export function Lablec(props: LablecProps) {
  return (
    <p style={{ position: 'absolute', bottom: 0, right: 0, padding: '1rem' }}>
      Készítette: Ludvig Balázs
    </p>
  );
}

export default Lablec;
