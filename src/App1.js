import { useState } from "react";
import Box from "./Box";
import BoxGame from "./BoxGame";
export default function App1() {
  const [show, setShow] = useState(true);
  const handle_click = () => {
    alert("Em đã gặp anh trong buổi chiều tan ca");
  };
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const handle_play = (index) => {
    if (board[index] !== "") {
      return;
    }
    let newBoard = [...board];
    newBoard[index] = show ? "X" : "O";
    setBoard(newBoard);
    setShow(!show);
  };
  return (
    <div>
      {show ? <Box old={8} name={"Lê Chó"} handle_click={handle_click} /> : ""}
      <button onClick={() => setShow(!show)}>Toggle mount</button>
      <div className="game">
        {board.map((value, key) => {
          return (
            <BoxGame
              value={board[key]}
              handle_play={handle_play}
              index={key}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
}
// export default App1
