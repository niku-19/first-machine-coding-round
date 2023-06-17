/* eslint-disable react/prop-types */
import { useBookContext } from "../../Context/Book-Context";
import styles from "./BookCard.module.css";

const BookCard = ({ eachBook }) => {
  const { dispatch } = useBookContext();

  const handleMoveBooks = (e, id) => {
    if (e.target.value === "none") {
      dispatch({ type: "DO__NOTHING" });
    }
    dispatch({ type: "MOVE_BOOKS", payload: { id, status: e.target.value } });
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img className={styles.card__image} src={eachBook?.imgUrl} alt="" />
      </div>
      <div className={styles.drop__down__menu}>
        <select
          className={styles.drop__down__menu__select}
          value={eachBook?.status}
          onChange={(e) => handleMoveBooks(e, eachBook?.isbn)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currently__Reading">Currently Reading</option>
          <option value="want__to__read">Want to Read</option>
          <option value="read">Read</option>
          <option value={eachBook?.status}>None</option>
        </select>
      </div>
      <div className={styles.books__details}>
        <h3 className={styles.card__title}>
          {eachBook?.title.length > 20
            ? `${eachBook?.title.slice(0, 20)}...`
            : eachBook?.title}
        </h3>
        <p className={styles.card__author}>{eachBook?.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
