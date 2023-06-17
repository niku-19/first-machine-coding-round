/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, bookReducerFunc } from "../Reducer/Book-reducer";

const BookContext = createContext(null);

const BookContextProvider = ({ children }) => {
  const [booksData, dispatch] = useReducer(bookReducerFunc, INITIAL_STATE);

  return (
    <BookContext.Provider value={{ booksData, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBookContext = () => useContext(BookContext);

export default BookContextProvider;
