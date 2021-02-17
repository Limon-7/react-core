import React, { useState } from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ADD_BOOK } from "../reducers/BookReducer";

function BookForm() {
  /*   // using context state
  const { addBook } = useContext(BookContext); */
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // addBook(title, author);
    dispatch({ type: ADD_BOOK, book: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name={title}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        placeholder="Enter Title"
      />
      <input
        type="text"
        name={author}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        placeholder="Enter author"
      />
      <input type="submit" value="addBook" />
    </form>
  );
}

export default BookForm;
