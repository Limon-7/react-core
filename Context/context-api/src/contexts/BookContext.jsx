import React, { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Tech yourself C", id: 1 },
    { title: "Learn Javascript", id: 2 },
    { title: "Introduction to mechine learning", id: 3 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}

export const BookContextConsumer = BookContext.Consumer;
export default BookContextProvider;
