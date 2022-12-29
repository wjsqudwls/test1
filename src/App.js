import React, { useState } from "react";
import "./App.css";

function User(props) {
  return <div className="title">{props.user.name}</div>;
}

const App = () => {
  const [users, setUsers] = useState([{ id: 0, name: "리액트배우자" }]);
  const [name, setName] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      name: name,
    };
    setUsers([...users.newUser]);
  };

  return (
    <div>
      <div className="apptitle">
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={addUserHandler}>추가하기</button>
      </div>

      <div>
        {users.map((user) => {
          return <User user={user} key={user.id}></User>;
        })}
      </div>
    </div>
  );
};

export default App;
