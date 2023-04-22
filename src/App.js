import logo from "./logo.svg";
import "./App.css";
import StudentList from "./StudentList";
import { useState, useEffect } from "react";
function App() {
  const [x, setX] = useState(0);
  const vd = [
    { name: "Heo", old: 2 },
    { name: "Ga", old: 3 },
  ];
  const [check, setCheck] = useState(true);
  const [text, setText] = useState("Mèo");
  const [name, setName] = useState("");
  const [list, setList] = useState(() => {
    let listLocal;
    if (localStorage.getItem("list")) {
      listLocal = JSON.parse(localStorage.getItem("list"));
    } else {
      listLocal = vd;
    }

    console.log(listLocal);
    return listLocal;
  });
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
  const handle_add = () => {
    setList((pre) => {
      const newList = [...pre, { name: name, old: 3 }];
      localStorage.setItem("list", JSON.stringify(newList));
      return newList;
    });
  };
  const bgStyle = {
    background: "aqua",
    border: "1px solid green",
  };
  return (
    <div className="App">
      <h2>Đã up lên git lần 2</h2>
    <h2>Đã up lên git lần 3</h2>
    <h2>Đã up lên git lần 4</h2>
      <h2 style={bgStyle}>React js</h2>
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
          // return <li>{JSON.stringify(st)}</li>;
          return (
            <li>
              {st.name}, {st.old}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handle_Change_Text}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handle_change_name}
        />
      </form>
      <button onClick={handle_add}>Add student</button>
    </div>
  );
}

export default App;
