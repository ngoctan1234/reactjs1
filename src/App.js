import logo from "./logo.svg";
import "./App.css";
import StudentList from "./StudentList";
import { useState, useEffect } from "react";
function App() {
  const [x, setX] = useState(0);
  const [check, setCheck] = useState(true);
  const [text, setText] = useState("Mèo");
  const [name, setName] = useState("");
  const [list, setList] = useState([1, 2, 3, 4]);
  const [student, setStudent] = useState({
    name: "Nguyễn Hoàng Gia Bảo",
    old: 5,
  });
  const handle_Increase = () => {
    setX((pre) => pre + 1);
    setX((pre) => pre + 1);
  };
  const handle_Change_Text = (e) => {
    e.preventDefault();
    setText(name);
    setName("");
    setStudent((pre) => ({ ...pre, name: name }));
  };
  const handle_change_name = (event) => {
    setName(event.target.value);
    setStudent((pre) => ({ ...pre, name: name }));
  };
  console.log("re render");
  const handle_toggle_student = () => {
    setCheck((pre) => !pre);
  };
  return (
    <div>
      <h2>React js</h2>
      <h1>{x}</h1>
      <h1>name:{text}</h1>
      <h1>
        Họ và tên: {student["name"]}, Tuổi: {student.old}{" "}
        {JSON.stringify(student)}
      </h1>
      <button onClick={handle_Increase}>Increase</button>
      <button onClick={handle_Change_Text}>Change Text</button>
      <form onSubmit={handle_Change_Text}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handle_change_name}
        />
      </form>

      <button onClick={handle_toggle_student}>Toggle Student</button>
      {check ? <StudentList /> : ""}
      <ul>
        {list.map((st, key) => {
          return <li>{st}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
