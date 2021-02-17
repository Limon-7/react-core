import React from "react";

function MemoDemo() {
  const [users, setUsers] = React.useState([
    { id: "a", name: "Robin" },
    { id: "b", name: "Dennis" },
  ]);
  console.log("Render: MemoDemo");
  const [text, setText] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers(users.concat({ id: Math.random(), name: text }));
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} />
    </div>
  );
}
// without memo
// const List = ({ list }) => {
//   console.log("Render: List");
//   return (
//     <ul>
//       {list.map((item) => (
//         <ListItem key={item.id} item={item} />
//       ))}
//     </ul>
//   );
// };
//   with memo
const List = React.memo(({ list }) => {
  console.log("Render: List");
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
});
// with memo
const ListItem = React.memo(({ item }) => {
  console.log("Render: ListItem");
  return <li>{item.name}</li>;
});
// without memo
// const ListItem = ({ item }) => {
//   console.log("Render: ListItem");
//   return <li>{item.name}</li>;
// };

export default MemoDemo;
