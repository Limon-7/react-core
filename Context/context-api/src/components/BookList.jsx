import React, { Component, useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
import "./BookList.css";

function BookList() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="bookList"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ background: theme.ui }}>
            {book.title}
          </li>
        ))}

        <li style={{ background: theme.ui }}>Js Book</li>
        <li style={{ background: theme.ui }}>Mern Stack</li>
      </ul>
    </div>
  );
}

export default BookList;

/* export class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, dark, light } = this.context;
    console.log("object", this.context);
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="bookList"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Java Book</li>
          <li style={{ background: theme.ui }}>Js Book</li>
          <li style={{ background: theme.ui }}>Mern Stack</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
 */
