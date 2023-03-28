import { useState } from 'react';
import styles from './idopont.module.scss';

/* eslint-disable-next-line */
export interface IdopontProps {}

export function Idopont(props: IdopontProps) {
  const [inputName, setInputName] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  return (
    <div className={styles['container']}>
      <div>
        <label>Név:</label>
        <br />
        <input
          type="text"
          name="name"
          id={styles['input-name']}
          value={inputName}
          onChange={(e) => setInputName(e.currentTarget.value)}
        />
      </div>

      <div>
        <label>Dátum:</label>
        <br />
        <input
          type="date"
          name="date"
          id={styles['input-date']}
          value={inputDate}
          onChange={(e) => setInputDate(e.currentTarget.value)}
        />
      </div>

      <div>
        <label>Leírás:</label>
        <br />
        <textarea
          name="description"
          id={styles['input-description']}
          cols={30}
          rows={10}
          value={inputDescription}
          onChange={(e) => setInputDescription(e.currentTarget.value)}
        ></textarea>
      </div>

      <button
        type="submit"
        onClick={() => {
          if (inputName && inputDate && inputDescription) {
            alert('Küldés sikeres');
          } else {
            alert('Küldés sikertelen, töltse ki az összes adatot!');
          }
        }}
      >
        Küldés
      </button>
    </div>
  );
}

export default Idopont;
