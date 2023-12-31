"use client";
import { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");
export default function Home() {
  const [input, setInput] = useState("");
  const sendMsg = () => {
    socket.emit("sendmsg", input);
  };
  return (
    <>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="enter the msg"
      />
      <button onClick={sendMsg}>send</button>
    </>
  );
}
