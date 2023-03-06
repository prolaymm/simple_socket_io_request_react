import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";
import { useEffect } from "react";

function App() {
  const socket = io("yourbaseurl");
  useEffect(() => {
  
    socket.connect();
    socket.on("connect",(data) => {console.log("Hello connected")})
    socket.emit("youreventname", datatype); //if you have to emit something after connect
    socket.on("your event name to listen socket", (data) => { ///on event listen socket
      console.log(`Room joined ` + data); 
    });
  
  }, [socket]);

  const sendMessage = () => {
  
    socket.emit('your event name',"object or any type of data"); ///emit is use when you send want to send data to socket
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Arjun socket <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={ sendPing }>Send Message</button>
      </header>
    </div>
  );
}

export default App;
