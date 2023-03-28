import styles from './fooldal.module.scss';

/* eslint-disable-next-line */
export interface FooldalProps {}

export function Fooldal(props: FooldalProps) {
  return (
    <div className={styles['container']}>
      <h2>Üdvözöllek DJ Petrik weboldalán!</h2>
      <h3>Válassz a fenti lehetőségek közül!</h3>
      <img src="src/assets/dj.jpg" alt="" />
    </div>
  );
}

export default Fooldal;
