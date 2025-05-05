import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

export default function Button ({text, to, onClick}) {
  if (to) {
    return (
      <Link
        to={to}
        className={styles.button}
      >
        {text}
      </Link>
    )
  }
  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      {text}
    </button>
  )
    ;
}