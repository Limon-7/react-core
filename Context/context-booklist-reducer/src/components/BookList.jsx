import React from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

function BookList() {
  const { books } = useContext(BookContext);
  if (!books.length) {
    return (
      <div className="empty">
        <span>No books to read. Hello free time :{":)"}</span>
      </div>
    );
  }

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
