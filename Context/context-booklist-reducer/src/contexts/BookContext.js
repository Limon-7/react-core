import React, { createContext, useReducer, useEffect } from "react";
import { BookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

/* Using reducer */
const initialState = [
  { title: "Tech yourself C", author: "Roberstson", id: 1 },
  { title: "Learn Javascript", author: "Andrew", id: 2 },
  { title: "Introduction to mechine learning", author: "Pycham", id: 3 },
];
function BookContextProvider(props) {
  const [books, dispatch] = useReducer(BookReducer, initialState, () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : initialState;
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
/* using context */
/* function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Tech yourself C", author: "Roberstson", id: 1 },
    { title: "Learn Javascript", author: "Andrew", id: 2 },
    { title: "Introduction to mechine learning", author: "Pycham", id: 3 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
} */

export default BookContextProvider;
