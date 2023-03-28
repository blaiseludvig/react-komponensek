import styles from './tapasztalat.module.scss';

/* eslint-disable-next-line */
export interface TapasztalatProps {}

export function Tapasztalat(props: TapasztalatProps) {
  return (
    <div className={styles['container']}>
      <div>
        <h2>Pro-bono bulik</h2>
        <ul>
          <li>Csibeavató, 2021. 08. 31.</li>
          <li>Karácsonyi bál, 2021. 12. 22.</li>
          <li>Farsangi mliatság, 2022. 02. 20.</li>
        </ul>

        <h2>Professzionális bulik</h2>
        <ul>
          <li>Tanárkarácsony, 2021. 12. 20.</li>
          <li>Ballagás, 2022. 04. 30.</li>
        </ul>
      </div>

      <img src="src/assets/petrik.jpg" alt="" />
    </div>
  );
}

export default Tapasztalat;
