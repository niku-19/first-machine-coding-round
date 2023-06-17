import BookCard from "../../Components/BooksCard/BookCard";
import { useState } from "react";
import { useBookContext } from "../../Context/Book-Context";

import styles from "./SearchPage.module.css";
import { NavLink } from "react-router-dom";
function SearchPage() {
  const { booksData, dispatch } = useBookContext();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueries = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    dispatch({ type: "SEARCH_BOOKS", payload: e.target.value });
  };

  return (
    <section>
      <div className="container">
        <input
          type="text"
          onChange={(e) => handleSearchQueries(e)}
          value={searchQuery}
          placeholder="Search Books"
        />
        <div className={styles.grid__container}>
          {booksData?.searchedBooks?.map((eachBook) => (
            <BookCard key={eachBook.isbn} eachBook={eachBook} />
          ))}
        </div>
        <NavLink to={"/"}>
          <button>Go to Home Page</button>
        </NavLink>
      </div>
    </section>
  );
}

export default SearchPage;
