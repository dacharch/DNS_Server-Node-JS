import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [output, setOutput] = useState("");
  const [checked, setCheck] = useState("ipv4");
  const [webUrl, setWebUrl] = useState("");

  const getIPaddress = async (e) => {
    e.preventDefault();
    if (checked === "ipv4") {
      let {data} = await axios.post(
        "http://localhost:3002/ipv4",
        {
          domain: webUrl,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setOutput(data);
    }
    if (checked === "ipv6"){
       let {data} = await axios.post(
        "http://localhost:3002/ipv6",
        {
          domain:webUrl
        },
        {
          headers:{
            "content-Type":"application/json"
          }
        }
       )
       setOutput(data) ;  
    }
  };

  return (
    <div className="container">
      <div className="form_container">
        <h3>Domain to Resolve in IP Address </h3>
        <input
          className="ipInput"
          type="text"
          placeholder="Enter Your Website Name"
          onChange={(e) => setWebUrl(e.target.value)}
        />
        <br />
        <div className="check_box">
          <div>
            <input
              className="radio_check"
              type="radio"
              name="ip"
              value="ipv4"
              onChange={() => setCheck("ipv4")}
            />
            <label>IPv4 Address</label>
          </div>
          <div>
            <input
              className="radio_check"
              type="radio"
              name="ip"
              value="ipv6"
              onChange={() => setCheck("ipv6")}
            />
            <label>IPv6 Address</label>
          </div>
        </div>
        <button onClick={getIPaddress}>Get IP Address</button>
        <p className="output">{output}</p>
      </div>
    </div>
  );
}

export default App;
