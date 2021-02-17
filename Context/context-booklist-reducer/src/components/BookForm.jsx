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

  // handleOnchange=(e)=>{
  //   setValue((currentState) => ({
  //       ...currentState,
  //       [e.target.name]: e.target.value,
  //     }));
  // }
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
/* Class component to dispatch an reducer */
// const initialState = {
//   title: "",
//   author: "",
// };
// export class BookForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       initialState,
//     };
//   }
//   static contextType = BookContext;

//   componentDidMount() {
//     console.log("dispatch", this.context);
//   }

//   handleSubmit = (e) => {
//     const { title, author } = this.state;
//     const { dispatch } = this.context;
//     console.log("dispatch-in handle", dispatch);
//     e.preventDefault();
//     // addBook(title, author);
//     dispatch({ type: ADD_BOOK, book: { title, author } });
//     console.log(author);
//     console.log(title);
//     this.setState(initialState);
//   };
//   render() {
//     const { title, author } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           name={title}
//           value={title}
//           onChange={(e) => this.setState({ title: e.target.value })}
//           required
//           placeholder="Enter Title"
//         />
//         <input
//           type="text"
//           name={author}
//           value={author}
//           onChange={(e) => this.setState({ author: e.target.value })}
//           required
//           placeholder="Enter author"
//         />
//         <input type="submit" value="addBook" />
//       </form>
//     );
//   }
// }

export default BookForm;
