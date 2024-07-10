import styles from "../fakestore/fakestorestyles/card.module.css";
import headphones from "../../images/headphones.jpg";
import lotion from "../../images/lotion.jpg";
import shoes from "../../images/shoes.jpg";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardone}>
        <img className={styles.imageclass} src={headphones} alt="Headphones" />
        <div className={styles.buttonflex}>
          <button type="button">Electronics</button>
        </div>
      </div>
      <div className={styles.cardtwo}>
        <img className={styles.imageclass2} src={lotion} alt="Lotion" />
        <div className={styles.buttonflex}>
          <button type="button">Lotion & Perfumes</button>
        </div>
      </div>
      <div className={styles.cardthree}>
        <img className={styles.imageclass} src={shoes} alt="Shoes" />
        <div className={styles.buttonflex}>
          <button type="button">Foot Wear</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
