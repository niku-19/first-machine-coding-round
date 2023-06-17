import booksData from "../Data/Books.data";

const INITIAL_STATE = {
  allBooks: booksData,
  currently__Reading: booksData.filter(
    (book) => book.status === "currently__Reading"
  ),
  want__to__read: booksData.filter((book) => book.status === "want__to__read"),
  read: booksData.filter((book) => book.status === "read"),
  searchedBooks: [],
  error: null,
  loading: false,
};

const bookReducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "MOVE_BOOKS": {
      const updatedBook = state.allBooks.map((book) =>
        book.isbn === payload.id ? { ...book, status: payload.status } : book
      );

      return {
        ...state,
        allBooks: updatedBook,
        currently__Reading: updatedBook.filter(
          (book) => book.status === "currently__Reading"
        ),
        want__to__read: updatedBook.filter(
          (book) => book.status === "want__to__read"
        ),
        read: updatedBook.filter((book) => book.status === "read"),
      };
    }

    case "DO__NOTHING": {
      return {
        ...state,
        currently__Reading: state.allBooks.filter(
          (book) => book.status === "currently__Reading"
        ),
        want__to__read: state.allBooks.filter(
          (book) => book.status === "want__to__read"
        ),
        read: state.allBooks.filter((book) => book.status === "read"),
      };
    }

    case "SEARCH_BOOKS": {
      const updatedSearchBook = state.allBooks.filter((book) =>
        book.title.toLowerCase().includes(payload.toLowerCase())
      );

      return {
        ...state,
        searchedBooks: updatedSearchBook,
      };
    }

    case "default":
      return state;
  }
};

export { INITIAL_STATE, bookReducerFunc };
