import styles from "./Heroimg2.module.css";

function Heroimg2({ heading, text }) {
  return (
    <div className={styles.heroimg2}>
      <div className={styles.heroimg2__heading}>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Heroimg2;
