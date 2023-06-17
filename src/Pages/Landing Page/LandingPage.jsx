import BookCard from "../../Components/BooksCard/BookCard";
import { useBookContext } from "../../Context/Book-Context";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const { booksData } = useBookContext();
  return (
    <section>
      <div className="container">
        {booksData?.currently__Reading.length > 0 && <h1>Continue reading</h1>}
        <div className={styles.grid__container}>
          {booksData?.currently__Reading.map((eachBook) => (
            <BookCard key={eachBook.isbn} eachBook={eachBook} />
          ))}
        </div>
        {booksData?.want__to__read.length > 0 && <h1>Want To Read</h1>}
        <div className={styles.grid__container}>
          {booksData?.want__to__read.map((eachBook) => (
            <BookCard key={eachBook.isbn} eachBook={eachBook} />
          ))}
        </div>
        {booksData?.read.length > 0 && <h1>Read </h1>}
        <div className={styles.grid__container}>
          {booksData?.read.map((eachBook) => (
            <BookCard key={eachBook.isbn} eachBook={eachBook} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
